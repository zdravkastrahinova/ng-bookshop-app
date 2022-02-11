import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Book } from '../../models/book.model';
import { BooksService } from '../../services/books.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, takeUntil } from 'rxjs/operators';
import { of, Subject } from 'rxjs';

@Component({
  selector: 'app-book-reactive-form',
  templateUrl: './book-reactive-form.component.html',
  styleUrls: ['./book-reactive-form.component.scss']
})
export class BookReactiveFormComponent implements OnInit, OnDestroy {

  formGroup: FormGroup;

  book: Book;

  destroy$ = new Subject<boolean>();

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private booksService: BooksService
  ) {
    this.book = {
      title: '',
      author: ''
    };
  }

  get titleFormControl(): FormControl {
    return this.formGroup?.get('title') as FormControl;
  }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params) => {
        if (params.id) {
          return this.booksService.getBook$(params.id);
        }

        this.initForm();

        return of(null);
      }),
      takeUntil(this.destroy$)
    ).subscribe({
      next: (response) => {
        if (response) {
          this.book = response;

          this.initForm();
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  onSubmit(): void {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();

      return;
    }

    const book: Book = {
      id: this.formGroup.value.id, // this.book.id,
      title: this.formGroup.value.title,
      author: this.formGroup.value.author,
      summary: this.formGroup.value.summary
    };

    let request$;
    if (book.id) {
      request$ = this.booksService.putBook$(book);
    } else {
      request$ = this.booksService.postBook$(book);
    }

    request$.subscribe({
      next: () => {
        this.router.navigate(['/books']);
      }
    });
  }

  private initForm(): void {
    this.formGroup = this.fb.group({
      id: this.book.id,
      title: [this.book.title, [Validators.required, Validators.maxLength(5)]],
      author: this.book.author,
      summary: this.book.summary
    });
  }
}

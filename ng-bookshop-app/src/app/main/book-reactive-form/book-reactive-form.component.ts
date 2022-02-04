import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Book } from '../../models/book.model';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-book-reactive-form',
  templateUrl: './book-reactive-form.component.html',
  styleUrls: ['./book-reactive-form.component.scss']
})
export class BookReactiveFormComponent implements OnInit {

  @Output() listChanged = new EventEmitter<void>();

  formGroup: FormGroup;

  constructor(
    private fb: FormBuilder,
    private booksService: BooksService
  ) {
  }

  get titleFormControl(): FormControl {
    return this.formGroup.get('title') as FormControl;
  }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(5)]],
      author: '',
      summary: ''
    });
  }

  onSubmit(): void {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();

      return;
    }

    const book: Book = {
      title: this.formGroup.value.title,
      author: this.formGroup.value.author,
      summary: this.formGroup.value.summary
    };

    this.booksService.postBook$(book).subscribe({
      next: () => {
        this.listChanged.emit();
      }
    });
  }
}

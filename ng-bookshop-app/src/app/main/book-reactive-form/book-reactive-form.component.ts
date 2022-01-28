import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-reactive-form',
  templateUrl: './book-reactive-form.component.html',
  styleUrls: ['./book-reactive-form.component.scss']
})
export class BookReactiveFormComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  get titleFormControl(): FormControl {
    return this.formGroup.get('title') as FormControl;
  }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(5), Validators.pattern('regex')]],
      author: '',
      summary: ''
    });
  }

  onSubmit(): void {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
    }

    console.log(this.formGroup);
  }
}

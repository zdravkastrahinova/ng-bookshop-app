import { Component, OnInit, ViewChild } from '@angular/core';
import { Book } from '../../models/book.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-book-td-form',
  templateUrl: './book-td-form.component.html',
  styleUrls: ['./book-td-form.component.scss']
})
export class BookTdFormComponent implements OnInit {

  @ViewChild('form') ngForm: NgForm;

  book: Book;

  constructor() {
    this.book = {
      title: '',
      author: ''
    };
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.ngForm);
  }
}

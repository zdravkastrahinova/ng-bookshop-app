import { NgModule } from '@angular/core';
import { BookItemComponent } from './book/book-item/book-item.component';
import { BookTdFormComponent } from './book/book-td-form/book-td-form.component';
import { BookReactiveFormComponent } from './book/book-reactive-form/book-reactive-form.component';
import { BooksComponent } from './book/books/books.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MainRoutingModule
  ],
  declarations: [
    MainComponent,
    BookItemComponent,
    BookTdFormComponent,
    BookReactiveFormComponent,
    BooksComponent
  ]
})
export class MainModule{
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './main/books/books.component';
import { BookReactiveFormComponent } from './main/book-reactive-form/book-reactive-form.component';

const routes: Routes = [
  {
    path: 'books',
    component: BooksComponent
  },
  {
    path: 'books/create',
    component: BookReactiveFormComponent
  },
  {
    path: 'books/edit/:id',
    component: BookReactiveFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

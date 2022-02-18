import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './book/books/books.component';
import { BookReactiveFormComponent } from './book/book-reactive-form/book-reactive-form.component';
import { MainComponent } from './main.component';
import { AclGuard } from '../guards/acl.guard';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'books',
        component: BooksComponent
      },
      {
        path: 'books/create',
        component: BookReactiveFormComponent,
        canActivate: [AclGuard]
      },
      {
        path: 'books/edit/:id',
        component: BookReactiveFormComponent,
        canActivate: [AclGuard]
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'books'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}

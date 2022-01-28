import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { BookItemComponent } from './main/book-item/book-item.component';
import { BookTdFormComponent } from './main/book-td-form/book-td-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookReactiveFormComponent } from './main/book-reactive-form/book-reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    BookItemComponent,
    BookTdFormComponent,
    BookReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

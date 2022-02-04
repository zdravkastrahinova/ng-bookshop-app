import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book.model';
import { BooksService } from '../services/books.service';
import { map, take, takeUntil } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  books: Book[];
  favoriteBook: Book;

  errorMessage: string;

  constructor(private booksService: BooksService) {
  }

  ngOnInit(): void {
    this.getContent();
  }

  onMarkAsFavorite(book: Book): void {
    this.favoriteBook = book;
  }

  onListUpdate(): void {
    this.getContent();
  }

  onBookDelete(bookId: number): void {
    this.booksService.deleteBook$(bookId).subscribe({
      next: () => {
        this.books = this.books.filter(book => book.id !== bookId);
      }
    });
  }

  private getContent(): void {
    this.booksService.getBooks$().pipe(
      map((response: Book[]) => {
        const sortedResponse = response.sort((a, b) => {
          if (a.title < b.title) {
            return -1;
          }

          if (a.title > b.title) {
            return 1;
          }

          return 0;
        });

        return sortedResponse;
      }),
      take(1)
    ).subscribe({
      next: (response: Book[]) => {
        this.books = response;
      },
      error: (response: HttpErrorResponse) => {
        this.errorMessage = response.message;
      }
    });
  }
}

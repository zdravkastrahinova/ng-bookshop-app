import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, AfterViewInit {

  books: Book[];
  favoriteBook: Book;

  constructor() {
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit');

    this.books = [
      {
        title: 'My book 1',
        author: 'Book author 1'
      },
      {
        title: 'My book 2',
        author: 'Book author 2'
      },
      {
        title: 'My book 3',
        author: 'Book author 3'
      },
      {
        title: 'Vue Training',
        author: 'Book author 1'
      },
      {
        title: 'React Training',
        author: 'Book author 2'
      },
      {
        title: 'Angular Training',
        author: 'Book author 3'
      },
      {
        title: 'SPA',
        author: 'Book author 1'
      },
      {
        title: 'Testing',
        author: 'Book author 2'
      },
      {
        title: 'Bla bla',
        author: 'Book author 3'
      },
      {
        title: 'Cold book',
        author: 'Book author 1'
      },
      {
        title: 'Cool book',
        author: 'Book author 2'
      },
      {
        title: 'ABC',
        author: 'Book author 3'
      }
    ];

    this.books = this.books.sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      }

      if (a.title > b.title) {
        return 1;
      }

      return 0;
    });
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  onMarkAsFavorite(book: Book): void {
    this.favoriteBook = book;
  }
}

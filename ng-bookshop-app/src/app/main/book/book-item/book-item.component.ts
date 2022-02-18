import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent {

  @Input() book: Book;
  @Input() position: number;

  @Output() bookClicked: EventEmitter<Book> = new EventEmitter<Book>();
  @Output() bookDeleted: EventEmitter<number> = new EventEmitter<number>();

  onClick(): void {
    this.bookClicked.emit(this.book);
  }

  onDelete(): void {
    this.bookDeleted.emit(this.book.id);
  }
}

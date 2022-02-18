import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private url = `${environment.apiUrl}/books`;

  constructor(private http: HttpClient) {
  }

  getBooks$(): Observable<Book[]> {
    return this.http.get<Book[]>(this.url);
  }

  getBook$(id: number): Observable<Book> {
    const url = `${this.url}/${id}`;

    return this.http.get<Book>(url);
  }

  postBook$(book: Book): Observable<Book> {
    return this.http.post<Book>(this.url, book);
  }

  putBook$(book: Book): Observable<Book> {
    const url = `${this.url}/${book.id}`;

    return this.http.put<Book>(url, book);
  }

  deleteBook$(id: number): Observable<void> {
    const url = `${this.url}/${id}`;

    return this.http.delete<void>(url);
  }
}

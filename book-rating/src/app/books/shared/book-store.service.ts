import { Injectable } from '@angular/core';
import { Book } from './book';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

  private books: Book[];
  private api = 'https://api.angular.schule';

  constructor(private http: HttpClient) {
    this.books = [
      {
        isbn: '000',
        title: 'Angular',
        description: 'Grundlagen und fortgeschrittene Themen',
        rating: 5
      },
      {
        isbn: '111',
        title: 'React',
        description: 'Ein anderes Framework',
        rating: 3
      }
    ];
  }

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.api}/secure/books`);
  }

  getSingle(isbn: string): Observable<Book> {
    return this.http.get<Book>(`${this.api}/secure/book/${isbn}`).pipe(
      catchError(err => {
        console.log(err);
        // return throwError('Buch nicht gefunden');
        return of({ isbn: '', title: 'Nichts passiert', description: '', rating: 4 });
      })
    );
  }

  create(book: Book): Observable<any> {
    return this.http.post(
      `${this.api}/book`,
      book,
      { responseType: 'text' } // wenn API kein JSON liefert
    );
  }

  search(term: string): Observable<Book[]> {
    return this.http.get<any[]>(`${this.api}/books/search/${term}`).pipe(
      map(rawBooks => (rawBooks ? rawBooks : [])),
    );
  }

  getAllStatic(): Book[] {
    return this.books;
  }
}

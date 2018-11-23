import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';
import { Book } from './book';

@Injectable()

export class BookService {
  result:any;

  constructor(private _http: Http) { }

  getBooks() {
    return this._http.get("/api/books")
      .pipe(map(result => this.result = result.json()));
  }
  getBook(id) {
    return this._http.get("/api/details/" + id)
      .pipe(map(result => this.result = result.json()));
  }

  insertBook(book: Book) {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });

    return this._http.post('/api/books', JSON.stringify(book), options)
    .pipe(map(result => this.result = result.json()));
  }
}

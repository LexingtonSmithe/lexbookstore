import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  books: Array<Book>;

  constructor(private _bookService: BookService) { }

  ngOnInit() {
    this._bookService.getBooks()
      .subscribe(res=> this.books = res);
  }

}

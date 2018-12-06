import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book';
import { routerTransition } from '../animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [routerTransition],
  host: {'[@routerTransition]': ''}
})
export class HomeComponent implements OnInit {

  books: Array<Book>;
  val;

  itemSelected(e){
    console.log(e)
    this.val = e;
  }

  constructor(private _bookService: BookService) { }

  ngOnInit() {
    this._bookService.getBooks()
      .subscribe(res=> this.books = res);
  }

}

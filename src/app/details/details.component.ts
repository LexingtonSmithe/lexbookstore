import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  book: Array<Book>;

  constructor(private _bookService: BookService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe((params) => {
      let id = params['id'];
      this._bookService.getBook(id)
      .subscribe(res => this.book = res);
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  book: Book;
  bookForm: FormGroup;
  editMode = false;

  constructor(private _bookService: BookService, private fb: FormBuilder, private router:ActivatedRoute, private reroute: Router) {

  }

  ngOnInit() {

    this.router.params.subscribe((params) => {
      let id = params['id'];
      this._bookService.getBook(id)
      .subscribe(res =>
        {
          this.book = res;
          //console.log(res);
          //console.log(this.book.title);
          this.bookForm = this.fb.group({
            '_id': [this.book._id],
            'title': [this.book.title, Validators.compose([Validators.required, Validators.maxLength(60)])],
            'author': [this.book.author, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(100)])],
            'url': [this.book.url, Validators.required],
            'genre': [this.book.genre, Validators.required],
            'yearPublished': [this.book.yearPublished, Validators.required],
            'description': [this.book.description, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
          })
        }
      );
    })
  }

  updateBook(book: Book){
    this._bookService.updateBook(book)
    .subscribe(newBook => {
      this.book = newBook;
      console.log(newBook);
      this.editMode=false;
    })
  }
}

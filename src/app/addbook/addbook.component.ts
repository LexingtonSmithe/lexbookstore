import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.scss']
})
export class AddBookComponent implements OnInit {

  books: Array<Book>;
  bookForm: FormGroup;


  constructor(private _bookService: BookService, fb: FormBuilder, private router:Router) {

    this.bookForm = fb.group({
      'title': [null, Validators.compose([Validators.required, Validators.maxLength(60)])],
      'author': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(100)])],
      'url': [null, Validators.required],
      'genre': [null, Validators.required],
      'yearPublished': [null, Validators.required],
      'description': [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
    })

  }

  ngOnInit() {
    this._bookService.getBooks()
    .subscribe(res => this.books = res);
  }

  newBook(book: Book){
    this._bookService.insertBook(book)
    .subscribe(newBook => {
      this.books.push(newBook);
      this.router.navigateByUrl('/');
    })
  }

}

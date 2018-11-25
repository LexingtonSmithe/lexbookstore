import { Component, OnInit } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchKeyword: Book = new Book();

  constructor() { }

  ngOnInit() {
  }

}

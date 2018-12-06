import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchKeyword: Book = new Book();

  @Output()
  keyPress: EventEmitter<Object> = new EventEmitter<Object>();

  keyPressed(event, searchItem) {
    this.keyPress.emit({
      value: event.target.value,
      itemsearch: searchItem
    });
  }

  constructor() { }

  ngOnInit() {
  }

}

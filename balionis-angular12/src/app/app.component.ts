import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';

import {
  selectBookCollection,
  selectBooks
} from './state/books.selectors';
import {
  retrievedBookList,
  addBook,
  removeBook,
} from './state/books.actions';

import { GoogleBooksService } from './book-list/books.service';
import {AppState} from "./state/app.state";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  books$ = this.store.pipe(select(selectBooks));
  bookCollection$ = this.store.pipe(select(selectBookCollection));

  title = 'balionis-angular12';

  onAdd(bookId: string) {
    this.store.dispatch(addBook({ bookId }));
  }

  onRemove(bookId: string) {
    this.store.dispatch(removeBook({ bookId }));
  }

  constructor(
      private booksService: GoogleBooksService,
      private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.booksService
        .getBooks()
        .subscribe((books) => this.store.dispatch(retrievedBookList({ books })));
  }
}
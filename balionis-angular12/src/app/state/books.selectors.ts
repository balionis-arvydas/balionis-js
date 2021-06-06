import { createSelector, createFeatureSelector } from "@ngrx/store";
import { AppState } from "./app.state";
import { Book } from "../book-list/books.model";

export const selectBooksState = createFeatureSelector<
    AppState,
    Array<Book>
    >("books");

export const selectBooks = createSelector<
    AppState,
    Array<Book>,
    Array<Book>>(
    selectBooksState,
    (books: Array<Book>) => books
);

export const selectCollectionState = createFeatureSelector<
    AppState,
    Array<string>
    >("collection");

export const selectBookCollection = createSelector<
    AppState,
    Array<Book>,
    Array<string>,
    Array<Book>>(
    selectBooks,
    selectCollectionState,
    (books: Array<Book>, collection: Array<string>) => {
        return books.filter((book) => collection.indexOf(book.id) >= 0);
    }
);

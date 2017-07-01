import { Component, OnInit } from '@angular/core';
import {Book} from './books.model';
import {BookService} from './book.service';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
bookSelected:Book;
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.selectedBook.subscribe(
      (book:Book) => {
        this.bookSelected=book ; 
      }
      );
  }
  

}



import { Component, OnInit } from '@angular/core';
import {BookService} from '../../books/book.service';
import {Book} from '../../books/books.model';
import {Response} from '@angular/http';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
insertNewBook=false;
private newTitle='';
private newAutuor='';
private newDate='';
private newImage='';
books=[];


  constructor(private bookService :BookService) { }

  ngOnInit() {

    // this.books=this.bookService.getBooks();
    this.onGet();

  }
  insert(){
    this.insertNewBook=!this.insertNewBook;

  }
  onSave(){
   this.bookService.storeAllBooks(this.books).subscribe(
     (response)=>console.log(response),
     (error)=>console.log(error)
   );
   


 }
 onGet(){
   this.bookService.getAllBooks().subscribe(
(serverBooks:any [])=>this.books=serverBooks,
  

     (error)=>console.log(error)
   );
 }
onNew(){
  this.books.push(new Book(this.newTitle,this.newAutuor,new Date(this.newDate),this.newImage)
)
this.onSave();
}
}

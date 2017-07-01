import { Component, OnInit,Input } from '@angular/core';
import {BookService} from '../../book.service';
import{Book} from '../../books.model';
@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {
@Input() books:Book;
@Input() index:number;
@Input() bookArray=[];
private newTitle='';
private newAutuor='';
private newDate='';
private newImage='';
private edit=true;

  constructor(private bookService : BookService) { }

  ngOnInit() {
  }
onSelected(){
  this.bookService.selectedBook.emit(this.books);
    
}

onEdit(){
  this.edit=!this.edit;
}

onEditSave(){
  
  this.books.autuor=this.newAutuor;
  this.books.title=this.newTitle;
  this.books.date=new Date(this.newDate);
  this.books.imagePath=this.newImage;
   this.edit=!this.edit;

this.onBookSave();

  
}
onBookSave(){
   this.bookService.storeBook(this.books,this.index).subscribe(
     (response)=>console.log(response),
     (error)=>console.log(error)
   );

 }

onDelete(){
 
if(confirm('are u sure you want to delete '+this.books.title +"?" )){
this.bookArray.splice(this.index,1);
}

 
}

onCancel(){
  this.books.autuor=this.books.autuor;
  this.books.title=this.books.title;
  this.books.date=this.books.date;
  this.books.imagePath=this.books.imagePath;

   this.edit=!this.edit;
}
}

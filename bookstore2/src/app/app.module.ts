import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HeaderComponent} from './header/header.component';
import { AppComponent } from './app.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { BookItemComponent } from './books/book-list/book-item/book-item.component';
import {BookService} from './books/book.service';
import {HttpModule} from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { BooksComponent } from './books/books.component';
import{RemoveNoneEnglish} from './removeNonEnglish.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookItemComponent,
    RemoveNoneEnglish,
   
    HeaderComponent,
    BooksComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }

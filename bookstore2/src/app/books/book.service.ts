import {EventEmitter,} from '@angular/core';
import{Book} from './books.model';
import {Injectable} from '@angular/core';
import {Http,RequestOptions,Headers} from '@angular/http';
import 'rxjs/Rx';
import {Response} from '@angular/http';
@Injectable()
export class BookService{

selectedBook=new EventEmitter<Book>();
   

    headers: Headers;
   options: RequestOptions;
   private _url:string="http://localhost:4200/bookstore2/app/data/book.json";
    

  
    constructor(private http:Http ){
     this.headers = new Headers({ 'Content-Type': 'application/json', 
                                     'Accept': 'q=0.8;application/json;q=0.9' });
        this.options = new RequestOptions({ headers: this.headers });}

    storeAllBooks(book: Book[]){
        return this.http.put('https://bookstore-1c005.firebaseio.com/books.json',book);


    }
        storeBook(book: Book,index:number){
        return this.http.put('https://bookstore-1c005.firebaseio.com/books.json/'+index,book);


    }




getAllBooks(){
    return this.http.get('https://bookstore-1c005.firebaseio.com/books.json').map(
        (response:Response)=> {
            const data=response.json();
            
            return data;
        }
    );

   //https://bookstore-1c005.firebaseio.com/books.json
}

}
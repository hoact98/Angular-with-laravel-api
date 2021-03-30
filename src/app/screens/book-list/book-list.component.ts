import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  constructor(private bookService: BookService) { }
  books: any;
  ngOnInit(): void {
    this.bookService.getAll().subscribe(data => {
      console.log(data);
      this.books = data;
    })
  }
}

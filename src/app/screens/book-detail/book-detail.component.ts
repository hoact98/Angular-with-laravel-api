import { BookService } from 'src/app/services/book.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private bookService: BookService) { }
  bookId: string;
  book: any;
  bookRelate:any;
  imageDirectoPath: any = 'http://localhost:8000/';
  async ngOnInit() {
    await this.route.params.subscribe(params => {
      this.bookId = params['bookId'];
    });

    await this.bookService.findById(this.bookId).subscribe(data => {
      this.book = data;
      this.bookService.getRelate(data.categoryId,data.id).subscribe(data=>{
        this.bookRelate=data;
        })
    })
    
  }

}

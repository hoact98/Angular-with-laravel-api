import { ORDER_DATA } from './../../mock-data/ORDER_DATA';
import { CategoryService } from 'src/app/services/category.service';
import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-book-cate',
  templateUrl: './book-cate.component.html',
  styleUrls: ['./book-cate.component.css']
})
export class BookCateComponent implements OnInit {
  constructor(private route: ActivatedRoute,private bookService: BookService,private cateService: CategoryService) { }
  books: any[]=[];
  cates: any[]=[];
  cateId: string;
  imageDirectoPath: any = 'http://localhost:8000/';
  page = 1;
  pageSize = 12;
  orderData: any[]= ORDER_DATA;
  filterObject = {
    orderBy: "1",
    keyword: ""
  }
  async ngOnInit() {
   
    await this.route.params.subscribe(params => {
      this.cateId = params['cateId'];
      this.search();
    });
    await this.cateService.getAll().subscribe(data=>{
      this.cates=data;
    })
  }
  search(){
    this.bookService.getBookCate(this.filterObject,this.cateId).subscribe(data => {
      this.books = data;
    })
  }
}

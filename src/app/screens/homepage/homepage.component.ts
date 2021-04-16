import { ORDER_DATA } from './../../mock-data/ORDER_DATA';
import { CategoryService } from 'src/app/services/category.service';
import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  constructor(private bookService: BookService,private cateService: CategoryService) { }
  books: any[]=[];
  cates: any[]=[];
  imageDirectoPath: any = 'http://localhost:8000/';
  page = 1;
  pageSize = 10;
  last_page=1;
  orderData: any[]= ORDER_DATA;
  filterObject = {
    orderBy: "1",
    keyword: ""
  }
  ngOnInit(): void {
    this.search();
    this.cateService.getAll().subscribe(data=>{
      this.cates=data;
    })
  }
  search(){
    this.bookService.getBook(this.filterObject,this.page).subscribe(res => {
      this.pageSize= res.per_page;
      this.page = res.current_page;
      this.last_page = res.last_page * res.per_page;
      this.books = res.data;
    })
  }
}


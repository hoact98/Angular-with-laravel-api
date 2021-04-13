import { CategoryService } from './../../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { BookService } from 'src/app/services/book.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cate-list',
  templateUrl: './cate-list.component.html',
  styleUrls: ['./cate-list.component.css']
})
export class CateListComponent implements OnInit {
  cates: Category[] = [];
  page = 1;
  pageSize = 10;
  constructor(private cateService: CategoryService, private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
    this.getCateList();
  }

  getCateList(){
    this.cateService.getAll().subscribe(data => {
      this.cates = data;
    })
  }

  remove(id: any){
    Swal.fire({
      title: 'Bạn có chắc?',
      text: "Bạn sẽ không thể hoàn tác!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Xoá!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.cateService.findById(id).subscribe(cate => {
          if(cate.books.length==0){
           this.cateService.remove(cate.id).subscribe(data => {
             Swal.fire({
               icon: 'success',
               title: 'Xoá danh mục thành công!',
               showConfirmButton: false,
               timer: 1500
             })
             this.getCateList();
           })
         }else{
           let ids = cate.books.map(item => item.id);
           this.bookService.removeMultiple(ids).subscribe(result => {
             this.cateService.remove(cate.id).subscribe(data => {
               Swal.fire({
                 icon: 'success',
                 title: 'Xoá danh mục thành công!',
                 showConfirmButton: false,
                 timer: 1500
               })
               this.getCateList();
             })
           })
         }
       })
      }
    })
   
  }

}

import { AuthorService } from './../../../services/author.service';
import { Author } from './../../../models/author';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {
authors: Author[]=[];
page = 1;
  pageSize = 10;
  constructor(private authorService: AuthorService,private bookService: BookService, route: Router) { }

  ngOnInit(): void {
    this.getAuthorList();
  }

  getAuthorList(){
    this.authorService.getAll().subscribe(data => {
      this.authors = data;
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
        this.authorService.findById(id).subscribe(cate => {
          if(cate.books.length==0){
           this.authorService.remove(cate.id).subscribe(data => {
             this.getAuthorList();
           })
         }else{
           let ids = cate.books.map(item => item.id);
           this.bookService.removeMultiple(ids).subscribe(result => {
             this.authorService.remove(cate.id).subscribe(data => {
               this.getAuthorList();
             })
           })
         }
       })
      }
    })
   
  }
}

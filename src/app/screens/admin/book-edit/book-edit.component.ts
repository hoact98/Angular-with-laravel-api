import { AuthorService } from './../../../services/author.service';
import { CategoryService } from './../../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { Author } from 'src/app/models/author';
import { Category } from 'src/app/models/category';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { HttpHeaders } from '@angular/common/http';
import Swal from 'sweetalert2';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  bookId: Number = -1;
  imageDirectoPath: any = 'http://localhost:8000/';
  editForm: FormGroup;
  authors: Author[]=[];
  cates: Category[]=[];
  files:any;
  errors:any;
  image = '';
  editorConfig: AngularEditorConfig = {
    editable: true,
      spellcheck: true,
      height: '10rem',
      minHeight: '5rem',
      maxHeight: 'auto',
      width: 'auto',
      minWidth: '0',
      translate: 'yes',
      enableToolbar: true,
      showToolbar: true,
      placeholder: 'Nhập nội dung...',
      defaultParagraphSeparator: '',
      defaultFontName: '',
      defaultFontSize: '',
      fonts: [
        {class: 'arial', name: 'Arial'},
        {class: 'times-new-roman', name: 'Times New Roman'},
        {class: 'calibri', name: 'Calibri'},
        {class: 'comic-sans-ms', name: 'Comic Sans MS'}
      ],
      customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadUrl: 'http://localhost:8000/api/ang_editor/upload',
    uploadWithCredentials: false,
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      ['bold', 'italic'],
      ['fontSize']
    ]
};

  constructor(private bookService: BookService, private cateService: CategoryService,private authorService: AuthorService,
    private route: ActivatedRoute,
            private router: Router,) { 
  this.editForm = this.createForm();
  }

  async ngOnInit() {
    await this.route.params.subscribe(params => {
      this.bookId = params.id;
     
    });
    await this.bookService.findById(this.bookId).subscribe(data => {
      this.getAuthorList();
      this.getCateList();
      this.image=data.image;
      this.editForm.setValue(
        {
           id: data.id,
           title: data.title,
           price: data.price,
           detail: data.detail,
           short_desc: data.short_desc,
           categoryId: data.categoryId,
           authorId: data.authorId,
           image: '',
        }
      );
      
    });
    
  }
  createForm(){
    return new FormGroup({
      id: new FormControl(-1),
      title: new FormControl('', [Validators.required,Validators.minLength(4)]),
      detail: new FormControl('', [Validators.required,Validators.minLength(4)]),
      short_desc: new FormControl('', [Validators.required,Validators.minLength(4)]),
      categoryId: new FormControl('', [Validators.required]),
      authorId: new FormControl('', [Validators.required]),
      image: new FormControl(''),
      price: new FormControl('', [Validators.required,Validators.min(1000)])
    });
  }
  get f(){
    return this.editForm.controls;
  }
  getAuthorList(){
    this.authorService.getAll().subscribe(data => {
      this.authors = data;
    })
  }
  getCateList(){
    this.cateService.getAll().subscribe(data => {
      this.cates = data;
    })
  }
  
  imageUpload(event){
    this.files = event.target.files[0];
  }
  saveBook(event){
    event.preventDefault();
    let myFormData = new FormData();
     let headers = new HttpHeaders();
      headers.append('Content-Type', 'multipart/form-data');
      headers.append('Accept', 'application/json');
      myFormData.append('image', this.files);
      myFormData.append('id', this.editForm.value.id);
      myFormData.append('title', this.editForm.value.title);
      myFormData.append('categoryId', this.editForm.value.categoryId);
      myFormData.append('detail', this.editForm.value.detail);
      myFormData.append('short_desc', this.editForm.value.short_desc);
      myFormData.append('authorId', this.editForm.value.authorId);
      myFormData.append('price', this.editForm.value.price);
      myFormData.append('_method', 'PUT');
    this.bookService.update(myFormData,headers).subscribe(data => {
      Swal.fire({
        icon: 'success',
        title: 'Cập nhật sách thành công!',
        showConfirmButton: false,
        timer: 1500
      })
        this.router.navigate(['/admin/sach']);
    },
    (errorResponse: HttpErrorResponse) => {
      this.errors=errorResponse.error.errors;
    },)
  }
  public isCollapsed: boolean;
  iconCollapse: string = 'icon-arrow-up';

  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
    this.iconCollapse = this.isCollapsed ? 'icon-arrow-down' : 'icon-arrow-up';
  }
}

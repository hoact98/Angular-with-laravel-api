import { AuthorService } from './../../../services/author.service';
import { CategoryService } from './../../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { Author } from 'src/app/models/author';
import { Category } from 'src/app/models/category';
import { HttpHeaders } from '@angular/common/http';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.css']
})
export class BookNewComponent implements OnInit {
  files:any;
  bookForm: FormGroup;
  authors: Author[]=[];
  cates: Category[]=[];
  editorConfig: AngularEditorConfig = {
    editable: true,
      spellcheck: true,
      height: 'auto',
      minHeight: '0',
      maxHeight: 'auto',
      width: 'auto',
      minWidth: '0',
      translate: 'yes',
      enableToolbar: true,
      showToolbar: true,
      placeholder: 'Enter text here...',
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
    uploadUrl: 'v1/image',
    uploadWithCredentials: false,
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      ['bold', 'italic'],
      ['fontSize']
    ]
};
  constructor(private bookService: BookService, private cateService: CategoryService,private authorService: AuthorService,
    private router: Router) { 
  this.bookForm = this.createForm();
  }

  ngOnInit(): void {
    this.getAuthorList();
    this.getCateList();
   
  }
  createForm(){
    return new FormGroup({
      title: new FormControl('', [Validators.required,Validators.minLength(4)]),
      detail: new FormControl('', [Validators.required,Validators.minLength(4)]),
      short_desc: new FormControl('', [Validators.required,Validators.minLength(4)]),
      categoryId: new FormControl('', [Validators.required]),
      authorId: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required,Validators.min(1000)])
    });
  }
  get f(){
    return this.bookForm.controls;
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
  submitForm(event){
    event.preventDefault();
    var myFormData = new FormData();
      const headers = new HttpHeaders();
      headers.append('Content-Type', 'multipart/form-data');
      headers.append('Accept', 'application/json');
      myFormData.append('image', this.files);
      myFormData.append('data', JSON.stringify(this.bookForm.value));

    this.bookService.store(myFormData,headers).subscribe(data => {
      if(data.id != undefined){
        Swal.fire({
          icon: 'success',
          title: 'Thêm sách thành công!',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigate(['/admin/sach']);
      }
    })
 
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

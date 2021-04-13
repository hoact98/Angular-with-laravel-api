import { AuthorService } from './../../../services/author.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-author-new',
  templateUrl: './author-new.component.html',
  styleUrls: ['./author-new.component.css']
})
export class AuthorNewComponent implements OnInit {
authorForm: FormGroup;
constructor(private authorService: AuthorService,
  private router: Router) { 
this.authorForm = this.createForm();
}
  ngOnInit(): void {
  }
  createForm(){
    return new FormGroup({
      name: new FormControl('', [Validators.required,Validators.minLength(4)])
    });
  }
  get f(){
    return this.authorForm.controls;
  }
  submitForm(event){
    event.preventDefault();
    this.authorService.store(this.authorForm.value).subscribe(data => {
      if(data.id != undefined){
        Swal.fire({
          icon: 'success',
          title: 'Thêm tác giả thành công!',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigate(['/admin/tac-gia']);
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

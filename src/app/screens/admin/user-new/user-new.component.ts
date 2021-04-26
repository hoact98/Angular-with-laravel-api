import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { HttpHeaders } from '@angular/common/http';
import Swal from 'sweetalert2';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {
  files:any;
  userForm: FormGroup;
  errors:any;

  constructor(private userService: UserService,
    private router: Router) { 
  this.userForm = this.createForm();
  }

  ngOnInit(): void {
   
  }
  createForm(){
    return new FormGroup({
      name: new FormControl('', [Validators.required,Validators.minLength(4)]),
      email: new FormControl('', [Validators.required,Validators.email]),
      password: new FormControl('', [Validators.required,Validators.minLength(6)]),
      avatar: new FormControl('', [Validators.required]),
      role: new FormControl('', [Validators.required]),
    });
  }
  get f(){
    return this.userForm.controls;
  }
 
  avatarUpload(event){
  this.files = event.target.files[0];
}
  submitForm(event){
    event.preventDefault();
    var myFormData = new FormData();
      const headers = new HttpHeaders();
      headers.append('Content-Type', 'multipart/form-data');
      headers.append('Accept', 'application/json');
      myFormData.append('avatar', this.files);
      myFormData.append('id',this.userForm.value.id);
      myFormData.append('name',this.userForm.value.name);
      myFormData.append('email',this.userForm.value.email);
      myFormData.append('role',this.userForm.value.role);

    this.userService.store(myFormData,headers).subscribe(data => {
      if(data.id != undefined){
        Swal.fire({
          icon: 'success',
          title: 'Thêm tài khoản thành công!',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigate(['/admin/tai-khoan']);
      }
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

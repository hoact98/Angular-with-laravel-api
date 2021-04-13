import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { HttpHeaders } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  files:any;
  editForm: FormGroup;
  userId: Number = -1;
  imageDirectoPath: any = 'http://localhost:8000/';
  avatar='';

  constructor(private userService: UserService,
    private route: ActivatedRoute,
            private router: Router,) { 
  this.editForm = this.createForm();
  }

  async ngOnInit() {
    await this.route.params.subscribe(params => {
      this.userId = params.id;
     
    });
    await this.userService.findById(this.userId).subscribe(data => {
      this.avatar=data.avatar;
      this.editForm.setValue(
        {
           id: data.id,
           name: data.name,
           email: data.email,
           avatar: '',
        }
      );
      
    });
    
  }
  createForm(){
    return new FormGroup({
      id: new FormControl(-1),
      name: new FormControl('', [Validators.required,Validators.minLength(4)]),
      email: new FormControl('', [Validators.required,Validators.email]),
      avatar: new FormControl(''),
    });
  }
  get f(){
    return this.editForm.controls;
  }
 
  avatarUpload(event){
  this.files = event.target.files[0];
}
  saveUser(event){
    event.preventDefault();
    var myFormData = new FormData();
      const headers = new HttpHeaders();
      headers.append('Content-Type', 'multipart/form-data');
      headers.append('Accept', 'application/json');
      myFormData.append('avatar', this.files);
      myFormData.append('data', JSON.stringify(this.editForm.value));
      myFormData.append('_method', 'PUT');
    this.userService.update(myFormData,headers).subscribe(data => {
      Swal.fire({
        icon: 'success',
        title: 'Cập nhật tài khoản thành công!',
        showConfirmButton: false,
        timer: 1500
      })
        this.router.navigate(['/admin/tai-khoan']);
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

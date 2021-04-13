import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cate-new',
  templateUrl: './cate-new.component.html',
  styleUrls: ['./cate-new.component.css']
})
export class CateNewComponent implements OnInit {
  cateForm: FormGroup;
  constructor(private cateService: CategoryService,
    private router: Router) { 
  this.cateForm = this.createForm();
  }

  ngOnInit(): void {
  }
  createForm(){
    return new FormGroup({
      name: new FormControl('', [Validators.required,Validators.minLength(4)])
    });
  }
  get f(){
    return this.cateForm.controls;
  }
  submitForm(event){
    event.preventDefault();
    this.cateService.store(this.cateForm.value).subscribe(data => {
      if(data.id != undefined){
        Swal.fire({
          icon: 'success',
          title: 'Thêm danh mục thành công!',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigate(['/admin/danh-muc']);
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

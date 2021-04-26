import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-cate-edit',
  templateUrl: './cate-edit.component.html',
  styleUrls: ['./cate-edit.component.css']
})
export class CateEditComponent implements OnInit {
  errors:any;
  cateId: Number = -1;
  editForm: FormGroup;
  constructor(private route: ActivatedRoute,
            private router: Router,
            private cateService: CategoryService) {
    this.editForm = this.createForm();
  }
  async ngOnInit() {
    await this.route.params.subscribe(params => {
      this.cateId = params.id;
    });
    await this.cateService.findById(this.cateId).subscribe(data => {
        
      this.editForm.setValue({id: data.id, name: data.name});
    })
  }

  get f(){
    return this.editForm.controls;
  }

  createForm(): FormGroup{
    return new FormGroup({
      id: new FormControl(-1),
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ])
    })
  }

  saveCate(event: any){
    event.preventDefault();
    this.cateService.update(this.editForm.value).subscribe(data => {
      Swal.fire({
        icon: 'success',
        title: 'Cập nhật danh mục thành công!',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigate(['/admin/danh-muc']);
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

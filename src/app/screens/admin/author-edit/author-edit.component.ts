import { AuthorService } from './../../../services/author.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-author-edit',
  templateUrl: './author-edit.component.html',
  styleUrls: ['./author-edit.component.css']
})
export class AuthorEditComponent implements OnInit {
  authorId: Number = -1;
  errors:any;
  editForm: FormGroup;
  constructor(private route: ActivatedRoute,
            private router: Router,
            private authorService: AuthorService) {
    this.editForm = this.createForm();
  }
  async ngOnInit() {
    await this.route.params.subscribe(params => {
      this.authorId = params.id;
    });
    await this.authorService.findById(this.authorId).subscribe(data => {
      if(data.id == undefined){
        this.router.navigate(['/admin/tac-gia']);
      }
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

  saveAuthor(event: any){
    event.preventDefault();
   
    this.authorService.update(this.editForm.value).subscribe(data => {
      Swal.fire({
        icon: 'success',
        title: 'Cập nhật tác giả thành công!',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigate(['/admin/tac-gia']);
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

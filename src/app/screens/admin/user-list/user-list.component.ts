import { UserService } from './../../../services/user.service';
import { User } from './../../../models/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  imageDirectoPath: any = 'http://localhost:8000/';
  page = 1;
  pageSize = 10;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.getUserList();
  }

  getUserList(){
    this.userService.getAll().subscribe(data => {
      this.users = data;
    })
  }

  delete(id: number){
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
        this.userService.remove(id).subscribe((data) => {
          this.getUserList();
        })
      }
    })
    
  }
}

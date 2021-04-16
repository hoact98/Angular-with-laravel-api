import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { navItems } from '../../_nav';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-layout',
  templateUrl: 'admin-layout.component.html',
  styleUrls: ['admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {
  public sidebarMinimized = false;
  public navItems = navItems;

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
  avatar='';
  userName="";
  constructor(private userService: UserService,private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('access_token')==null){
      this.router.navigate(['/admin/login']);
    }
    this.userService.user().subscribe(item=>{
      if(item.role!=1){
          this.router.navigate(['/admin/login']);
      }
this.avatar = 'http://localhost:8000/'+ item.avatar;
this.userName = item.name;
    })
  }

  logout(){
    this.userService.logout().subscribe(item=>{
      localStorage.removeItem('access_token');
      this.router.navigate(['/admin/login']);
    })
  }
}

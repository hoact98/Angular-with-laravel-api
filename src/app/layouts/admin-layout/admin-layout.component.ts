import { Component, OnInit } from '@angular/core';
import { navItems } from '../../_nav';

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
  constructor() { }

  ngOnInit(): void {
  }

}

import { CategoryService } from './../../services/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-header',
  templateUrl: './client-header.component.html',
  styleUrls: ['./client-header.component.css']
})
export class ClientHeaderComponent implements OnInit {

  cates: any[]=[];
  constructor(private cateService: CategoryService) { }
  ngOnInit(): void {
    this.cateService.getAll().subscribe(data=>{
      this.cates=data;
    })
  }

  

}

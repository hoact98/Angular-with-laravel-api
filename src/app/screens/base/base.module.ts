// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


// Forms Component
import { FormsComponent } from './forms.component';

import { TablesComponent } from './tables.component';

// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// Components Routing
import { BaseRoutingModule } from './base-routing.module';

// Collapse Component
import { CollapseModule } from 'ngx-bootstrap/collapse';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BaseRoutingModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
  ],
  declarations: [
    FormsComponent,
    TablesComponent,
  ]
})
export class BaseModule { }

import { BookDetailComponent } from './screens/book-detail/book-detail.component';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { IconModule, IconSetModule, IconSetService } from '@coreui/icons-angular';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers
import { AdminLayoutComponent, ClientLayoutComponent } from './layouts';

import { P404Component } from './screens/error/404.component';
import { P500Component } from './screens/error/500.component';
import { LoginComponent } from './screens/login/login.component';
import { HttpClientModule } from '@angular/common/http';

const APP_CONTAINERS = [
  AdminLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app-routing.module';
import {NgbPaginationModule, NgbAlertModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts';
import { ClientHeaderComponent } from './components/client-header/client-header.component';
import { ClientFooterComponent } from './components/client-footer/client-footer.component';
import { CateListComponent } from './screens/admin/cate-list/cate-list.component';
import { CateNewComponent } from './screens/admin/cate-new/cate-new.component';
import { DashboardComponent } from './screens/admin/dashboard/dashboard.component';
import { BookNewComponent } from './screens/admin/book-new/book-new.component';
import { BookListComponent } from './screens/admin/book-list/book-list.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
 

// Collapse Component
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CateEditComponent } from './screens/admin/cate-edit/cate-edit.component';
import { AuthorListComponent } from './screens/admin/author-list/author-list.component';
import { AuthorNewComponent } from './screens/admin/author-new/author-new.component';
import { AuthorEditComponent } from './screens/admin/author-edit/author-edit.component';
import { BookEditComponent } from './screens/admin/book-edit/book-edit.component';
import { HomepageComponent } from './screens/homepage/homepage.component';
import { UserListComponent } from './screens/admin/user-list/user-list.component';
import { UserNewComponent } from './screens/admin/user-new/user-new.component';
import { UserEditComponent } from './screens/admin/user-edit/user-edit.component';
import { OrderListComponent } from './screens/admin/order-list/order-list.component';
import { OrderEditComponent } from './screens/admin/order-edit/order-edit.component';
import { BookCateComponent } from './screens/book-cate/book-cate.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    IconModule,
    IconSetModule.forRoot(),
    HttpClientModule,
    CollapseModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    NgbPaginationModule, 
    NgbAlertModule, NgbModule,
    AngularEditorModule
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    ClientLayoutComponent,
    ClientHeaderComponent,
    ClientFooterComponent,
    BookListComponent,
    CateListComponent,
    CateNewComponent,
    DashboardComponent,
    BookNewComponent,
    CateEditComponent,
    AuthorListComponent,
    AuthorNewComponent,
    AuthorEditComponent,
    BookEditComponent,
    HomepageComponent,
    UserListComponent,
    UserNewComponent,
    UserEditComponent,
    OrderListComponent,
    OrderEditComponent,
    BookDetailComponent,
    BookCateComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

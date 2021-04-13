import { BookCateComponent } from './screens/book-cate/book-cate.component';
import { BookDetailComponent } from './screens/book-detail/book-detail.component';
import { HomepageComponent } from './screens/homepage/homepage.component';
import { BookEditComponent } from './screens/admin/book-edit/book-edit.component';
import { AuthorEditComponent } from './screens/admin/author-edit/author-edit.component';
import { AuthorNewComponent } from './screens/admin/author-new/author-new.component';
import { AuthorListComponent } from './screens/admin/author-list/author-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { AdminLayoutComponent } from './layouts';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { BookNewComponent } from './screens/admin/book-new/book-new.component';
import { CateNewComponent } from './screens/admin/cate-new/cate-new.component';
import { CateListComponent } from './screens/admin/cate-list/cate-list.component';
import { BookListComponent } from './screens/admin/book-list/book-list.component';
import { P404Component } from './screens/error/404.component';
import { P500Component } from './screens/error/500.component';
import { LoginComponent } from './screens/login/login.component';
import { DashboardComponent } from './screens/admin/dashboard/dashboard.component';
import { CateEditComponent } from './screens/admin/cate-edit/cate-edit.component';
import { UserListComponent } from './screens/admin/user-list/user-list.component';
import { UserNewComponent } from './screens/admin/user-new/user-new.component';
import { UserEditComponent } from './screens/admin/user-edit/user-edit.component';
import { OrderListComponent } from './screens/admin/order-list/order-list.component';
import { OrderEditComponent } from './screens/admin/order-edit/order-edit.component';

export const routes: Routes = [
  
  {
    path: '',
    component: ClientLayoutComponent,
    children:[
      {
        path:'',
        component: HomepageComponent
      },
      {
        path:'sach/:bookId',
        component: BookDetailComponent
      },
      {
        path:'danh-muc/:cateId',
        component: BookCateComponent
      }
    ]
  }, 
  {
    path: 'admin',
    component: AdminLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: '',
        component: DashboardComponent,
        data: {
          title: 'Dashboard'
        },
      },
      {
        path: 'danh-muc',
        component: CateListComponent,
        data: {
          title: 'Danh mục'
        },
      },
      {
        path: 'danh-muc/them-moi',
        component: CateNewComponent,
        data: {
          title: 'Danh mục / Thêm mới'
        },
      },
      {
        path: 'danh-muc/edit/:id',
        component: CateEditComponent,
        data: {
          title: 'Danh mục / Cập nhật'
        },
      },
      {
        path: 'sach',
        component: BookListComponent,
        data: {
          title: 'Sách'
        },
      },
      {
        path: 'sach/them-moi',
        component: BookNewComponent,
        data: {
          title: 'Sách / Thêm mới'
        },
      },
      {
        path: 'sach/edit/:id',
        component: BookEditComponent,
        data:{
          title:'Sách / Cập nhật'
        }
      },
      {
        path: 'tac-gia',
        component: AuthorListComponent,
        data: {
          title: 'Tác giả'
        },
      },
      {
        path: 'tac-gia/them-moi',
        component: AuthorNewComponent,
        data: {
          title: 'Tác giả / Thêm mới'
        },
      },
      {
        path: 'tac-gia/edit/:id',
        component: AuthorEditComponent,
        data:{
          title: 'Tác giả / Cập nhật'
        }
      },
      {
        path: 'tai-khoan',
        component: UserListComponent,
        data: {
          title: 'Tài khoản'
        },
      },
      {
        path: 'tai-khoan/them-moi',
        component: UserNewComponent,
        data: {
          title: 'Tài khoản / Thêm mới'
        },
      },
      {
        path: 'tai-khoan/edit/:id',
        component: UserEditComponent,
        data:{
          title: 'Tài khoản / Cập nhật'
        }
      },
      {
        path: 'hoa-don',
        component: OrderListComponent,
        data: {
          title: 'Hoá đơn'
        },
      },
      {
        path: 'hoa-don/edit/:id',
        component: OrderEditComponent,
        data:{
          title: 'Hoá đơn / Cập nhật'
        }
      }
    ]
  },
  {
    path: 'admin/404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: 'admin/500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'admin/login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  { path: '**', component: P404Component }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

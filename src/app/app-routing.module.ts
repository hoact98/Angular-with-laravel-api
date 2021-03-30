import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { AdminLayoutComponent } from './layouts';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';

import { P404Component } from './screens/error/404.component';
import { P500Component } from './screens/error/500.component';
import { LoginComponent } from './screens/login/login.component';

export const routes: Routes = [
  {
    path: '',
    component: ClientLayoutComponent,
  },
  {
    path: 'admin',
    redirectTo: 'admin/dashboard',
    pathMatch: 'full',
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
  {
    path: 'admin',
    component: AdminLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'base',
        loadChildren: () => import('./screens/base/base.module').then(m => m.BaseModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./screens/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

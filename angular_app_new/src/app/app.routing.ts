import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './shared/components/layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './shared/components/layouts/auth-layout/auth-layout.component';

import { AuthGuard } from './_guards';

import { LoginComponent } from './login/login.component'; 
import { RegisterComponent } from './register/register.component';
import { FolderComponent } from './folder/folder.component';

export const rootRouterConfig: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  
  //{ path: '**', redirectTo: '' },
  /*{ 
    path: '', 
    redirectTo: 'others/blank', 
    pathMatch: 'full' 
  },
  {
    path: '', 
    component: AuthLayoutComponent,
    children: [
      { 
        path: 'sessions', 
        loadChildren: './views/sessions/sessions.module#SessionsModule',
        data: { title: 'Session'} 
      }
    ]
  },*/
  {
    path: '', 
    component: AdminLayoutComponent,
    children: [
      
      /*{
        path: 'others', 
        loadChildren: './views/others/others.module#OthersModule', 
        data: { title: 'Others', breadcrumb: 'OTHERS'}
      },*/
      { path: 'folder/:id', 
        component: FolderComponent,
        canActivate: [AuthGuard] 
      },
      /*{
        path: 'page-layouts',
        loadChildren: './views/page-layouts/page-layouts.module#PageLayoutsModule'
      },
      {
        path: 'search', 
        loadChildren: './views/search-view/search-view.module#SearchViewModule'
      }*/
    ]
  },
  
];

export const routing = RouterModule.forRoot(rootRouterConfig);

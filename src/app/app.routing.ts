import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleGuardService as AuthGuard } from './guard/role-guard.service';

// Import Containers
import {
  FullLayoutComponent,
  SimpleLayoutComponent
} from './containers';

export const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'dashboard',
  //   pathMatch: 'full',
  // },
  {
    path: '',
    component: FullLayoutComponent,
    // canActivate: [AuthGuard],
    data: {
      user: true,
      manager: true,
      admin: true,
      // title: 'Home',
      // title_fr: 'Domicile'
    },
    children: [
      {
        path: 'base',
        loadChildren: () => import('./views/base/base.module').then(m => m.BaseModule)
      }
    ]
  },
  {
    path: 'login',
    component: SimpleLayoutComponent,
    data: {
      user: true,
      manager: true,
      admin: true,
      title: 'login',
      title_fr: 'Ouverture de Session'
    },
    children: [
      {
        path: '',
        loadChildren: () => import('./views/login/login.module').then(m => m.LoginModule),
      }
    ]
  },
  { path: '**', redirectTo: 'dashboard' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

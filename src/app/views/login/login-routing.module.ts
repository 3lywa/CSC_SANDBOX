import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Template login',
      title_fr: 'Template s\'identifier',
    },
    children: [
      {
        path: 'login',
        component: LoginComponent,
        data: {
          title: 'Login Page',
          title_fr: 'Page de Connexion'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }

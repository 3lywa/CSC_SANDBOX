import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Manage Others
import { CodeComponent } from '../manage/code.component';
import { FacilityComponent } from '../manage/facility.component';
import { OffenderComponent } from '../manage/offender.component';

// extra
import { RoleGuardService as AuthGuard } from '../../guard/role-guard.service';
import { AboutComponent } from '../extra/about.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: ''
    },
    children: [
      {
        path: 'code',
        component: CodeComponent,
        // canActivate: [AuthGuard],
        data: {
          user: true,
          manager: true,
          admin: true,
          title: 'CodeComponent',
          title_fr: 'CodeComponent'
        }
      },
      {
        path: 'facility',
        component: FacilityComponent,
        // canActivate: [AuthGuard],
        data: {
          user: true,
          manager: true,
          admin: true,
          title: 'FacilityComponent',
          title_fr: 'FacilityComponent'
        }
      },
      {
        path: 'offender',
        component: OffenderComponent,
        // canActivate: [AuthGuard],
        data: {
          user: true,
          manager: true,
          admin: true,
          title: 'OffenderComponent',
          title_fr: 'OffenderComponent'
        }
      },
      {
        path: 'extra/about',
        component: AboutComponent,
        // canActivate: [AuthGuard],
        data: {
          user: true,
          manager: true,
          admin: true,
          title: 'About',
          title_fr: 'Au Sujet de'
        }
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule { }

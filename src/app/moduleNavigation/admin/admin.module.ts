import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { Admin1CompComponent } from './admin1-comp/admin1-comp.component';
import { Admin2CompComponent } from './admin2-comp/admin2-comp.component';
import { SubAdminComponent } from './sub-admin/sub-admin.component';
import { AdminComponentComponent } from './admin-component/admin-component.component';

const routes: Routes = [
  { path: '', redirectTo: 'admin-comp', pathMatch: 'full' },
  {
    path: 'admin-comp',
    component: AdminComponentComponent,
    children: [
      {
        path: 'admin1-comp',
        component: Admin1CompComponent
      },
      {
        path: 'admin2-comp',
        component: Admin2CompComponent
      }
    ]
  },
  { path: 'sub-admin', component: SubAdminComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [
    Admin1CompComponent,
    Admin2CompComponent,
    AdminComponentComponent,
    SubAdminComponent
  ]
})
export class AdminModule {}

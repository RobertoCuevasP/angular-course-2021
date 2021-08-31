import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { AdminComponentComponent } from './admin-component/admin-component.component';
import { Admin1CompComponent } from './admin1-comp/admin1-comp.component';
import { Admin2CompComponent } from './admin2-comp/admin2-comp.component';

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
  }
];

@NgModule({
  imports: [CommonModule],
  declarations: []
})
export class AdminModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Product1Component } from './product1/product1.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'p1',
    pathMatch: 'full'
  },
  { path: 'p1', component: Product1Component }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  declarations: [Product1Component]
})
export class ProductModule {}

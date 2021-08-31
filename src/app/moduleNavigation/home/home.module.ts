import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { Home1CompComponent } from './home1-comp/home1-comp.component';
import { Home2CompComponent } from './home2-comp/home2-comp.component';

const routes: Routes = [
  { path: '', redirectTo: 'home-comp', pathMatch: 'full' },
  {
    path: 'home-comp',
    component: HomeComponentComponent,
    children: [
      {
        path: 'home1-comp',
        component: Home1CompComponent
      },
      {
        path: 'home2-comp',
        component: Home2CompComponent
      }
    ]
  }
];

@NgModule({
  imports: [CommonModule],
  declarations: []
})
export class HomeModule {}

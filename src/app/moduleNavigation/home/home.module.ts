import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Home1CompComponent } from './home1-comp/home1-comp.component';
import { Home2CompComponent } from './home2-comp/home2-comp.component';
import { SubHomeComponent } from './sub-home/sub-home.component';
import { HomeComponentComponent } from './home-component/home-component.component';

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
  },
  { path: 'sub-home', component: SubHomeComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [
    Home1CompComponent,
    Home2CompComponent,
    HomeComponentComponent,
    SubHomeComponent
  ]
})
export class HomeModule {}

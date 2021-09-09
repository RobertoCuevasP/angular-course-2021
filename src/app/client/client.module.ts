import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Client1Component } from './client1/client1.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'c1',
    pathMatch: 'full'
  },
  { path: 'c1', component: Client1Component }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [Client1Component]
})
export class ClientModule {}

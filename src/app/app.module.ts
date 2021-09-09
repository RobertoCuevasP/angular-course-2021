import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ProviderComponent } from './provider/provider.component';

const routes: Routes = [
  {
    path: 'provider',
    component: ProviderComponent
  },
  {
    path: 'client',
    loadChildren: () =>
      import('./client/client.module').then(m => m.ClientModule)
  },
  {
    path: 'product',
    loadChildren: () =>
      import('./product/product.module').then(m => m.ProductModule)
  }
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  declarations: [AppComponent, ProviderComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

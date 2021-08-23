import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { CardComponent } from './card/card.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LoaderComponent, CardComponent],
  exports: [LoaderComponent, CardComponent]
})
export class SharedModule {}

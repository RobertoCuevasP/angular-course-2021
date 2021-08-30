import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { CardComponent } from './card/card.component';
import { PurePipe } from './pipes/pure.pipe';
import { ImpurePipe } from './pipes/impure.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [LoaderComponent, CardComponent, PurePipe, ImpurePipe],
  exports: [LoaderComponent, CardComponent, PurePipe, ImpurePipe]
})
export class SharedModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Shared2Directive } from './shared2.directive';
import { Shared1Component } from './shared1/shared1.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Shared2Directive, Shared1Component],
  exports: [Shared1Component, Shared2Directive]
})
export class SharedModule {}

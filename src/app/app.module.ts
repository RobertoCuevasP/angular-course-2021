import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Directive1Directive } from './directive1.directive';
import { Directive2Directive } from './directive2.directive';
import { AdminModule } from './page/admin/admin.module';
import { BuyModule } from './page/buy/buy.module';
import { HomeModule } from './page/home/home.module';
import { Module1Module } from './test1/module1/module1.module';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { Test3Component } from './test3/test3.component';

@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    Test2Component,
    Test3Component,
    Directive1Directive,
    Directive2Directive
  ],
  imports: [BrowserModule, FormsModule, HomeModule, AdminModule, BuyModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

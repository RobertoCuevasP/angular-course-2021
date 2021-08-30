import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Directive1Directive } from './directive1.directive';
import { Directive2Directive } from './directive2.directive';
import { CoreModule } from './HomeworkModules/core/core.module';
import { LayoutModule } from './HomeworkModules/layout/layout.module';
import { AdminModule } from './page/admin/admin.module';
import { BuyModule } from './page/buy/buy.module';
import { HomeModule } from './page/home/home.module';
import { ImpurePipe } from './shared/pipes/impure.pipe';
import { PurePipe } from './shared/pipes/pure.pipe';
import { SharedModule } from './shared/shared.module';
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
  imports: [
    BrowserModule,
    FormsModule,
    HomeModule,
    AdminModule,
    BuyModule,
    CoreModule,
    LayoutModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NoVacunadosService } from './core/services/no-vacunados.service';
import { VacunadosService } from './core/services/vacunados.service';
import { CommonModule } from '@angular/common';
import { VacunadosComponent } from './vacunados/vacunados.component';
import { NoVacunadosComponent } from './no-vacunados/no-vacunados.component';

@NgModule({
  declarations: [AppComponent, VacunadosComponent, NoVacunadosComponent],
  imports: [BrowserModule, CommonModule, HttpClientModule],
  providers: [
    NoVacunadosService,
    VacunadosService,
    VacunadosComponent,
    NoVacunadosComponent,
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}

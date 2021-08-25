import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JuradosModule } from './pages/jurados/jurados.module';
import { VotacionModule } from './pages/votacion/votacion.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, VotacionModule, JuradosModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { IonicModule } from '@ionic/angular';
import { NosOffresComponent } from './nos-offres/nos-offres.component';
import { ContactComponent } from './contact/contact.component';
import { SeConnecterComponent } from './se-connecter/se-connecter.component';
import { VehiculesComponent } from './vehicules/vehicules.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    NosOffresComponent,
    ContactComponent,
    SeConnecterComponent,
    VehiculesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



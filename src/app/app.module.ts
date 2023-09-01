import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import {NgApexchartsModule} from "ng-apexcharts";

import {AppComponent} from "./app.component";

import { TableauBordComponent } from './tableau-bord/tableau-bord.component';
import { HistoriqueMesuresComponent } from './historique-mesures/historique-mesures.component';
import { AccueilComponent } from './accueil/accueil.component';
import { InscriptionComponent } from './inscription/inscription.component';




@NgModule({
  declarations: [
    TableauBordComponent,
    AppComponent,
    HistoriqueMesuresComponent,
    AccueilComponent,
    InscriptionComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgApexchartsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class YourModule{}

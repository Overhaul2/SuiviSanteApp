import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';

<<<<<<< HEAD
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CitationComponent } from './citation/citation.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CitationComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
=======
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
>>>>>>> 9d6762891a0d8f04bb2309cccff7b2c705cb0dc8
  ],
  providers: [],
  bootstrap: [AppComponent]
})
<<<<<<< HEAD
export class AppModule { }
export class YourModule{}
=======

export class AppModule {}
  

>>>>>>> 9d6762891a0d8f04bb2309cccff7b2c705cb0dc8

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableauBordComponent } from './tableau-bord/tableau-bord.component';
import { AccueilComponent } from './accueil/accueil.component';
import { HistoriqueMesuresComponent } from './historique-mesures/historique-mesures.component';
import { InscriptionComponent } from './inscription/inscription.component';

const routes: Routes = [
  {path:"home", component:AccueilComponent},
  {path:"auth", component:InscriptionComponent},
  {path:"dashboard", component:TableauBordComponent},
  {path:"historique",component:HistoriqueMesuresComponent},
  {path:"inscription",component:InscriptionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

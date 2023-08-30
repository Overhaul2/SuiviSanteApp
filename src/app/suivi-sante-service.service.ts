import { Injectable } from '@angular/core';
import { Mesure } from './mesure';

@Injectable({
  providedIn: 'root'
})
// Définit un service qui gère les opérations liées aux mesures de suivi de santé
export class SuiviSanteServiceService {

  // Tableau pour stocker les mesures
  public mesureList:Mesure[] = [];
  //(id:number,date:string,poids:number,taille:number,pressionArterielle:number,pouls:number)
  constructor() {
    this.mesureList.push(new Mesure(1,'2023-08-23',75, 120, 75, 70))
    this.mesureList.push(new Mesure(2,'2023-06-23',85, 120, 75, 70));
    this.mesureList.push(new Mesure(3,'2023-05-23',95, 120, 75, 70));
    this.mesureList.push(new Mesure(4,'2023-04-23',65, 120, 75, 70))
   }

// Récupère la liste complète des mesures
  public getMesureList():Mesure[]{
    return this.mesureList;
}

// Ajoute une mesure à la liste
public setInMesureList(mesure:Mesure):void{
    this.mesureList.push(mesure);
}

 // Récupère les détails d'une mesure en fonction de son ID
public getMesureById(id:number):Mesure | undefined{

  // Recherche dans le tableau mesureList une mesure ayant l'ID correspondant
  return this.mesureList.find(mesure => mesure.id == id);
}
// Supprime une mesure en fonction de son ID
public deleteMesure(mesureId: number) {
  // Recherchez l'index de la mesure dans le tableau mesureList
  const index = this.mesureList.findIndex(mesure => mesure.id === mesureId);
  
  // Si l'index est valide (différent de -1), supprimez la mesure du tableau
  if (index !== -1) {
    this.mesureList.splice(index, 1);
  }
}
updateMesure(updatedMesure: Mesure) {
  const index = this.mesureList.findIndex(mesure => mesure.id === updatedMesure.id);
  if (index !== -1) {
      this.mesureList[index] = updatedMesure;
  }
}
}
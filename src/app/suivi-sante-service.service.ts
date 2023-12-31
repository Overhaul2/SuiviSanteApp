import { Injectable } from '@angular/core';
import { Mesure } from './mesure';
import { User } from './user';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
// Définit un service qui gère les opérations liées aux mesures de suivi de santé
export class SuiviSanteServiceService {

  // Tableau pour stocker les mesures
  public mesureList:Mesure[] = [];
  public usersList:User[] = [];
  //(id:number,date:string,poids:number,taille:number,pressionArterielle:number,pouls:number)
  constructor() {
    this.mesureList.push(new Mesure(1,'2023-08-31',75, 172, 70, 130, 80))
    this.mesureList.push(new Mesure(2,'2023-09-01',85, 200, 80, 120, 90));
    this.mesureList.push(new Mesure(3,'2023-09-02',95, 201, 70, 125, 95));
    this.mesureList.push(new Mesure(4,'2023-09-03',65, 100, 75, 122, 85))
   }

// Récupère la liste complète des mesures
  public getMesureList():Mesure[]{
    return this.mesureList;
}

public getUserList():User[]{
  return this.usersList;
}

// Ajoute une mesure à la liste
public setInMesureList(mesure:Mesure):void{
    this.mesureList.push(mesure);
    Swal.fire('Ajouter', 'La mesure a été ajouter avec succèe', 'success')
}


public setInUserList(user:User):void{
  this.usersList.push(user);
  localStorage.setItem("users",JSON.stringify(this.usersList));
}
 // Récupère les détails d'une mesure en fonction de son ID
public getMesureById(id:number):Mesure | undefined{

  // Recherche dans le tableau mesureList une mesure ayant l'ID correspondant
  return this.mesureList.find(mesure => mesure.id == id);
}

public getUserById(id:number):User | undefined{

  // Recherche dans le tableau mesureList une mesure ayant l'ID correspondant
  return this.usersList.find(user => user.id == id);
}
// Supprime une mesure en fonction de son ID
public deleteMesure(mesureId: number) {
  // Recherchez l'index de la mesure dans le tableau mesureList
  const index = this.mesureList.findIndex(mesure => mesure.id === mesureId);

  // Si l'index est valide (différent de -1), supprimez la mesure du tableau
  if (index !== -1) {
  Swal.fire({
      title: 'Confirmation!',
      text: 'Voulez-vous vraiment Supprimer ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui',
      confirmButtonColor:'red',
      cancelButtonText: 'Non',
      cancelButtonColor:'green',
      focusCancel:true
    })
    .then((result)=>{
    if(result.isConfirmed){this.mesureList.splice(index, 1);
    Swal.fire('Supprimé', 'La mesure a été supprimé aves succèss', 'success');}
  });
}

}
updateMesure(updatedMesure: Mesure) {

  const index = this.mesureList.findIndex(mesure => mesure.id === updatedMesure.id);
  if (index !== -1) {
      this.mesureList[index] = updatedMesure;
  }
}
}

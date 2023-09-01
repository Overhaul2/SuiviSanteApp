
import { Component, OnChanges, OnInit, SimpleChanges, inject, ElementRef, HostListener } from '@angular/core';
import { SuiviSanteServiceService } from '../suivi-sante-service.service';
import { Mesure } from '../mesure';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-historique-mesures',
  templateUrl: './historique-mesures.component.html',
  styleUrls: ['./historique-mesures.component.css']
})

export class HistoriqueMesuresComponent implements OnInit {
  public mesureList: Mesure[] = [];
  public mesureItemShow: any;
  public addMe: any;
  public mesureItem: any;
  public editable = false;

  ngOnInit(): void {
    this.mesureList = this.mesureServices.getMesureList();
    this.mesureItem = new Mesure(parseInt(""), "", parseInt(""),
      parseFloat(""), parseInt(""), parseInt(""));
  }
  mesureServices: SuiviSanteServiceService = inject(SuiviSanteServiceService);

  //enregistrement de la mesure en clickant sur le button enrégistré

  public saveMesure(e: Event) {
    e.preventDefault();
    var mesureTag = <HTMLElement>document.getElementById("mesure");
    var allMesureTag = mesureTag.querySelectorAll("input");

    // Vérification de chaque champ obligatoire
    if (
      allMesureTag[0].value === "" || // Date
      allMesureTag[1].value === "" || // Poids
      allMesureTag[2].value === "" || // Taille
      allMesureTag[3].value === "" || // Pouls
      allMesureTag[4].value === ""    // Pression artérielle
    ) {
      // const Swal = require('sweetalert2');
      // alert("Veuillez remplir tous les champs obligatoires.");
      Swal.fire({
        title: 'Erreur!',
        text: 'Veuillez remplire touts les champs',
        icon: 'error',
        confirmButtonText: 'Ok',
        padding: '2px',
      })
      return;
    }

    //recuperation des donné saisis par user
    var dateValue = new Date(allMesureTag[0].value);
    var poidsValue = parseInt(allMesureTag[1].value);
    var tailleValue = parseInt(allMesureTag[2].value);
    var poulsValue = parseInt(allMesureTag[3].value);
    var pressionArterielleValue = parseInt(allMesureTag[4].value);
    //obtenir la date du jour
    var today = new Date();
    if (dateValue === today  //Vérifier si la date est postérieure à la date du jour
    ) {
      Swal.fire({
        title: 'Erreur!',
        text: 'Veillez saisir une date valide',
        icon: 'error',
        confirmButtonText: 'OK'
      })
      return
    }
    if (poidsValue < 20 || poidsValue > 200 //verifie si le poids est compris entre 20 ET 200Kg
    ) {
      Swal.fire({
        title: 'Erreur!',
        text: 'Le poids doit être compris entre 20 et 200',
        icon: 'error',
        confirmButtonText: 'OK'
      })
      return

    }

    if (tailleValue < 100 || tailleValue > 300) {
      Swal.fire({
        title: 'Erreur!',
        text: 'La taille doit être compris entre 100 et 300',
        icon: 'error',
        confirmButtonText: 'OK'
      })
      return
    }
    if (poulsValue < 60 || poulsValue > 80) {
      Swal.fire({
        title: 'Erreur!',
        text: 'Le pouls doit être compris entre 60 et 80',
        icon: 'error',
        confirmButtonText: 'OK'
      })
      return
    }
    if (pressionArterielleValue < 60 || pressionArterielleValue > 200) {
      Swal.fire({
        title: 'Erreur!',
        text: 'La pression arteriel doit être compris entre 60 et 200',
        icon: 'error',
        confirmButtonText: 'OK'
      })
      return
    }
    var newMesure: Mesure = new Mesure(
      this.mesureServices.getMesureList().length + 1,
      allMesureTag[0].value,
      parseInt(allMesureTag[1].value),  //poids
      parseInt(allMesureTag[2].value),
      parseInt(allMesureTag[3].value),
      parseInt(allMesureTag[4].value))
    this.mesureServices.setInMesureList(newMesure);
    this.mesureItemShow = null;
    this.addMe = false;
  }
 
  public updateMesure(e: Event, index: number) {
    e.preventDefault();
    var mesureTag = <HTMLElement>document.getElementById("mesure");
    var allMesureTag = mesureTag.querySelectorAll("input");

    var newMesure: Mesure = new Mesure(
      index,
      allMesureTag[0].value,
      parseInt(allMesureTag[1].value),  //poids
      parseInt(allMesureTag[2].value),
      parseInt(allMesureTag[3].value),
      parseInt(allMesureTag[4].value));

    this.mesureServices.getMesureList().splice(index - 1, 1, newMesure);
    //this.mesureServices.getMesureList()[index] = newMesure;

    // console.log("le contenu a été modifier");
    Swal.fire('Modification', 'La mesure a été Modifier avec succèe', 'success')

    //setInMesureList(newMesure);
    this.mesureItemShow = null;
    this.addMe = false;
    this.editable = false;
  }
  // Ouvre une fenêtre modale pour ajouter quelque chose
  public openModal(e: Event) {
    e.preventDefault();
    this.addMe = true;
    this.editable = false;
    console.log(this.addMe);
    this.mesureItem = new Mesure(parseInt(""), "", parseInt(""),
      parseFloat(""), parseInt(""), parseInt(""));
  }
  // Ouvre une fenêtre modale pour afficher les détails d'une mesure spécifique
  public openModalView(e: Event, id: string, mesureId: number) {
    e.preventDefault();
    this.mesureItem = this.mesureServices.getMesureById(mesureId);
    this.mesureItemShow = true;
  }
  // Ferme la fenêtre modale de detail de mesure
  public closeModal(e: Event, id: string) {
    e.preventDefault();
    this.addMe = false;
    this.mesureItemShow = false;
  }
  // Supprime une mesure spécifique
  public deleteMesure(mesureId: number) {

    this.mesureServices.deleteMesure(mesureId);
    this.mesureItemShow = false;
  }

  public openModalEdit(mesureId: number) {
    // Obtenez l'historique correspondant à l'ID de la mesure
    const mesureToEdit = this.mesureServices.getMesureById(mesureId);
  }
  public filterOption: string = 'all';
  public sortOption: string = 'date';


  // calcule IMc
  calculateIMC(poids: number, taille: number): number {
    // console.log(taille,poids);
    if (taille <= 0) return 0;

    const tailleMetres = taille / 100;
    const imc = poids / (tailleMetres * tailleMetres);
    console.log(imc)
    return Math.round(imc * 10) / 10;
  }
}

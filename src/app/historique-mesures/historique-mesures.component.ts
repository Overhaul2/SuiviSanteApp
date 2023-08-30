import { Component, OnChanges, OnInit, SimpleChanges, inject,ElementRef, HostListener } from '@angular/core';
import { SuiviSanteServiceService } from '../suivi-sante-service.service';
import { Mesure } from '../mesure';



@Component({
  selector: 'app-historique-mesures',
  templateUrl: './historique-mesures.component.html',
  styleUrls: ['./historique-mesures.component.css']
})
export class HistoriqueMesuresComponent implements OnInit{
  public mesureList:Mesure[] = [];
  public mesureItemShow: any;
  public addMe:any;
  public mesureItem:any;
  public editable = false;

  ngOnInit(): void {
    this.mesureList = this.mesureServices.getMesureList();
    this.mesureItem = new Mesure(parseInt(""),"",parseInt(""),
    parseFloat(""),parseInt(""),parseInt(""));
  }
  mesureServices: SuiviSanteServiceService = inject(SuiviSanteServiceService);

  //enregistrement de la mesure en clickant sur le button enrégistré
  public saveMesure(e:Event){
      e.preventDefault();
      var mesureTag = <HTMLElement> document.getElementById("mesure");
      var allMesureTag = mesureTag.querySelectorAll("input");
      if( allMesureTag[0].value == "" ||
          allMesureTag[1].value == "" ||
          allMesureTag[2].value == "" ||
          allMesureTag[3].value == "" ||
          allMesureTag[4].value == ""){
            return
          }
      var newMesure:Mesure = new Mesure(
        this.mesureServices.getMesureList().length+1,
        allMesureTag[0].value,
        parseInt(allMesureTag[1].value),  //poids
        parseInt(allMesureTag[2].value),
        parseInt(allMesureTag[3].value),
        parseInt(allMesureTag[4].value))
        this.mesureServices.setInMesureList(newMesure);
        this.mesureItemShow = null;
        this.addMe = false;
  }

  public updateMesure(e:Event,index:number){
    e.preventDefault();
    var mesureTag = <HTMLElement> document.getElementById("mesure");
    var allMesureTag = mesureTag.querySelectorAll("input");
    var newMesure:Mesure = new Mesure(
      index,
      allMesureTag[0].value,
      parseInt(allMesureTag[1].value),  //poids
      parseInt(allMesureTag[2].value),
      parseInt(allMesureTag[3].value),
      parseInt(allMesureTag[4].value));
      this.mesureServices.getMesureList().splice(index-1,1,newMesure);
      //this.mesureServices.getMesureList()[index] = newMesure;

      console.log("le contenu a été modifier");
      
      //setInMesureList(newMesure);
      this.mesureItemShow = null;
      this.addMe = false;
      this.editable = false;
}
  // Ouvre une fenêtre modale pour ajouter quelque chose
  public openModal(e:Event){
    e.preventDefault();
    this.addMe = true; 
    this.editable = false;
    console.log(this.addMe);
    this.mesureItem = new Mesure(parseInt(""),"",parseInt(""),
    parseFloat(""),parseInt(""),parseInt(""));     
  }
// Ouvre une fenêtre modale pour afficher les détails d'une mesure spécifique
  public openModalView(e:Event,id:string,mesureId:number){
    e.preventDefault();
    this.mesureItem = this.mesureServices.getMesureById(mesureId); 
    this.mesureItemShow = true; 
  }
// Ferme la fenêtre modale de detail de mesure
  public closeModal(e:Event,id:string){
    e.preventDefault();
    this.addMe = false;
    this.mesureItemShow = false;
  }
// Supprime une mesure spécifique
  public deleteMesure(mesureId : number){

    this.mesureServices.deleteMesure(mesureId);
    this.mesureItemShow = false;
  }

  public openModalEdit(mesureId: number) {
    // Obtenez l'historique correspondant à l'ID de la mesure
    const mesureToEdit = this.mesureServices.getMesureById(mesureId);
  }
  public filterOption: string = 'all';
  public sortOption : string = 'date';

  
// calcule IMc 
calculateIMC(poids: number, taille: number): number {
 // console.log(taille,poids);
  if (taille <= 0) return 0; 

  const tailleMetres = taille/100; 
  const imc = poids / (tailleMetres * tailleMetres);
  console.log(imc)
  return Math.round(imc * 10) / 10; 
}


}

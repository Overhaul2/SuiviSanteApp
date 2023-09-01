import { Component, NgModule } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SuiviSanteServiceService } from '../suivi-sante-service.service';
import { User } from '../user';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
  
})

export class InscriptionComponent {
  showRegister = true;
  suiviSanteService:SuiviSanteServiceService;
  myForm = new FormGroup({
      nom : new FormControl(''),
      prenom : new FormControl(''),
      email : new FormControl(''),
      password : new FormControl('')
  })

  constructor(suiviSanteService:SuiviSanteServiceService){
    this.suiviSanteService = suiviSanteService;
    const u = localStorage.getItem("users");
      console.log(u);
    if(u){
      this.suiviSanteService.usersList = JSON.parse(u);
    }
    
  } 

  onSubmit(): void {
    console.log(this.myForm.value);
    this.suiviSanteService.setInUserList(new User(
      this.suiviSanteService.getUserList().length+1,
      this.myForm.value.nom??'',      
      this.myForm.value.prenom??'',
      this.myForm.value.email??'',
      this.myForm.value.password??''
    ));  
    
  }
}

import { Component } from '@angular/core';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  showRegister = true;
  nom : string = '';
  prenom : string = '';
  email : string = '';
  password : string = '';

  registerUser(event : Event) : void{
    event.preventDefault();
    //enregistrement des données dans le locall storage
    localStorage.setItem('nom', this.nom);
    localStorage.setItem('prenom', this.prenom);
    localStorage.setItem('email', this.email);

     // Réinitialisez les champs du formulaire
     this.nom = '';
     this.prenom = '';
     this.email = '';
     this.password = '';
    this.showRegister = false;
     // Naviguez vers la section de connexion
 
  }
  onSubmit(event: Event): void {
    event.preventDefault();
    console.log('Registration form submitted!');
    console.log(`Nom: ${this.nom}`);
    console.log(`Prénom: ${this.prenom}`);
    console.log(`Email: ${this.email}`);
    console.log(`Password: ${this.password}`);
  }
}

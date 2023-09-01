import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
onSubmit(){}
id:number=1;
nom:string='';
prenom:string='';
email:string='';
password:string='';

constructor() {}


}

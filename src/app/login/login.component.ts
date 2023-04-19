import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthentificationService} from "../services/authentification.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor( private route :Router, private logSer : AuthentificationService) {
  }
  pass: any;
  invalidLogin = false;
  success = "success";
  error= "Code edutiant invalide";


    log(){
      if(this.logSer.authenticate(this.pass)){
        this.route.navigate(['Admin'])
      }else {
        this.invalidLogin =true
      }
  }


}

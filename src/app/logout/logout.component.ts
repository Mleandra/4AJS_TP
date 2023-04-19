import { Component } from '@angular/core';
import {AuthentificationService} from "../services/authentification.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  constructor(private auth :AuthentificationService,private route:Router) {


  }
  ngOnInit(){
    this.auth.logOut();
    this.route.navigate(['']);
  }

}

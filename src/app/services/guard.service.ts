import { Injectable } from '@angular/core';
import {AuthentificationService} from "./authentification.service";
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,

  Router,
  RouterState,
  RouterStateSnapshot
} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class GuardService {

  constructor(private route:Router ,private authSevice :AuthentificationService) { }
   canActivate(route:ActivatedRouteSnapshot,state: RouterStateSnapshot){
    if(this.authSevice.isLog()){
      return true;
    }
    this.route.navigate(['login'])
     return false;

  }
}

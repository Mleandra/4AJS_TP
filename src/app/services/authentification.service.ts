import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor() { }
  authenticate(password:string){
    if(password=="102491"){
      sessionStorage.setItem('password',password)
      return true;
    }else {
      return false;
    }
  }
  isLog(){
    let ses = sessionStorage.getItem('password')
    console.log(!(ses===null))
    return !(ses===null)
  }
  logOut(){
    sessionStorage.removeItem('password')
  }
}

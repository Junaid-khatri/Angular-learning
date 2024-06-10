import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor() { }

  login(input:any){
    if(input.get('userName')?.value==='admin' && 
        input.get('password')?.value==='password'){
      return true;
    }
    else{
      return false;
    }
  }
}

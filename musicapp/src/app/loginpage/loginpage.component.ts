import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LoginserviceService } from '../loginservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {

  constructor(private fb: FormBuilder,private loginService: LoginserviceService,
    private router: Router){}
  
  loginForm = this.fb.group({
    userName: [''],
    password: ['']
  });

  public isLoginSucess:any;
  public isError=false;
  onLogin(){
    this.isLoginSucess = this.loginService.login(this.loginForm);
    if(this.isLoginSucess){
      this.router.navigate(['/home']);
    }
    else{
      this.isError=true;
      this.router.navigate(['/']);
    }
  }


}

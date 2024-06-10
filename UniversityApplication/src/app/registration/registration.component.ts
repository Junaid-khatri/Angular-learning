import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {LoginService} from '../login.service';
  

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{

  registrationForm: FormGroup = new FormGroup({});
  singupResponse:any;

  constructor(private formBuilder: FormBuilder,private loginService:LoginService){}

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      firstName:['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
      lastName:[''],
      role:['',[Validators.required]],
      password:['',[Validators.required,Validators.minLength(8),Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)]],
      confirmPassword:['',[]],
      email:['',[Validators.required,Validators.email,Validators.pattern(/@eidiko-india\.com$/)]],
      gender:['',[Validators.required]],
      employeeId:['',[Validators.required,Validators.max(9999)]],
      phoneNu:['',[Validators.required,Validators.pattern(/^[6-9]\d{9}$/)]],
      address:this.formBuilder.group({
        doorNu:['',[Validators.required]],
        streetName:['',[Validators.required]],
        landmark:['',[Validators.required]],
        area:['',[Validators.required]],
        city:['',[Validators.required]],
        state:['',[Validators.required]],
        pincode:['',[Validators.required]]
      })
    });
    
  }

  get email() {
    return this.registrationForm.get('email');
  }

  onSingup(){
    this.loginService.register(this.registrationForm.value);
  }
  // onLogin(){

  // }
  
}

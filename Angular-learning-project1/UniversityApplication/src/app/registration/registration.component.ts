import { Component, OnInit } from '@angular/core';
import { AbstractControl, EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      role:['Employee',[Validators.required]],
      password:['',[Validators.required,Validators.minLength(8),Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)]],
      confirmPassword:['',[]],
      email:['',[Validators.required,Validators.email,Validators.pattern(/@eidiko-india\.com$/)]],
      gender:['Male',[Validators.required]],
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
    },
    { validators: this.passwordMatchValidator }
  );
    
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    if (password !== confirmPassword) {
      return { passwordsNotMatching: true };
    }
    return null;
  }

  onSingup(){
    this.loginService.register(this.registrationForm.value);
  }
  // onLogin(){

  // }
  
}

import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent {
  emailControl = new FormControl('', [Validators.required, Validators.email]);
  passwordControl = new FormControl('', [Validators.required]);
  currentNumber:Observable<any> ;
  currentUser:Observable<any>


  loginForm = new FormGroup({
    email: this.emailControl,
    password: this.passwordControl,
  });
  //userForm: FormGroup;
  constructor(private formBuilder : FormBuilder, private authService: AuthService, private router: Router){

    this.currentNumber= this.authService.getNumber()
    this.currentUser= this.authService.getUserState()
  }







onSubmit() {
  const user = this.loginForm.value
  this.authService.setNumber(5)
  this.authService.loginUser(user).then(
  (data) => {
  this.authService.setNumber(0)
  this.router.navigate(['/dashboard/home'])
  this.authService.setUserState(false)
    }
   ).catch(
    () => {
      this.authService.setUserState(true)
      this.authService.setNumber(0)
    }
   )
 }
}



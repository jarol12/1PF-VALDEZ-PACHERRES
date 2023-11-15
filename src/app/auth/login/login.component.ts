import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
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

  loginForm = new FormGroup({
    email: this.emailControl,
    password: this.passwordControl,
  });
  //userForm: FormGroup;
  constructor(private formBuilder : FormBuilder, private authService: AuthService, private router: Router){
  }
  public noUsuarios: boolean = false;
  //get emailControl(){
  //  return this.userForm.controls['email']
  //}
//
  //get passwordControl() {
  //  return this.userForm.controls['password']
  //}
//
  //get emailControlIsInvalid(){
  //  return this.emailControl.touched
  //}
  //get passwordControlIsInvalid() {
  //  return this.passwordControl.invalid && this.passwordControl.touched;
  //}
//
playSound(): void{
  const audio = new Audio();
    audio.src = 'assets/sound/error.mp3';
    audio.load();
    audio.play();
}


  login(): void {
    this.noUsuarios = false;
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
    } else {
      this.authService.login(this.loginForm.getRawValue()).subscribe(
        () => {
          this.noUsuarios = this.authService.noUsuarios;
          if(this.authService.noUsuarios){
            this.playSound()
          }
        }
      );
    }
  }



}


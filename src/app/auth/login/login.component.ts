import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent {
  userForm: FormGroup;
  constructor(private formBuilder : FormBuilder){
    this.userForm = this.formBuilder.group({
    email: ['', [Validators.required,Validators.pattern(emailRegex)]],
    password: this .formBuilder.control('',[Validators.required,Validators.minLength(8)])
    })
  }

  get emailControl(){
    return this.userForm.controls['email']
  }

  get passwordControl() {
    return this.userForm.controls['password']
  }

  get emailControlIsInvalid(){
    return this.emailControl.touched
  }
  get passwordControlIsInvalid() {
    return this.passwordControl.invalid && this.passwordControl.touched;
  }

  onSubmit(): void{
    
  }
}


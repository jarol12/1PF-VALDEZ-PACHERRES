import { Component } from '@angular/core';
import {Observable } from 'rxjs';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  currentNumber:Observable<any> ;
  constructor(private authService: AuthService){
    this.currentNumber= this.authService.getNumber()
  }
}

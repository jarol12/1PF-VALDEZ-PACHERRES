import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService,  } from '../../services/auth.service';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { addDoc, collection } from '@angular/fire/firestore';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit  {
  state: number = 0;
formReg: FormGroup
private stateSubject = new BehaviorSubject<number>(0);
public state$ = this.stateSubject.asObservable();

constructor(
  private authService: AuthService,
  router: Router
){
  this.formReg = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    phone:  new FormControl(''),
    name:  new FormControl(''),
    address:  new FormControl(''),
})
}

ngOnInit() {
  this.authService.state$.subscribe(newState => {
    this.state = newState; // Actualizar el estado en este componente

  });
}



async submit() {
  await this.authService.addUser(this.formReg.value)
}



}

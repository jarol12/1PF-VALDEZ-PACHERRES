import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Subject, Observable, from, map, of,tap } from 'rxjs';
import { User } from 'src/app/dashboard/pages/users/models/users-models';
import { environment } from 'src/environments/environment.local';
import { LoginPayload, userRegister } from '../models';
import { Router } from '@angular/router';
import { Auth,authState,createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { Firestore, addDoc, collection, getDocs, where,query } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private numberSuject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private stateUserSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private _authUser$ = new BehaviorSubject<User | null>(null);
  private stateSubject = new BehaviorSubject<number>(0);
  public state$ = this.stateSubject.asObservable();

  public authUser$ = this._authUser$.asObservable();
  public noUsuarios: boolean = false;
  constructor(private firestore:Firestore, private auth: Auth) {}


  registerUser2({email, password}:any) {
    createUserWithEmailAndPassword(this.auth,email, password)
      .then(userCredential => {
        // Usuario registrado exitosamente
        sendEmailVerification(userCredential.user);
      })
      .catch(error => {
        alert('Error al registrar el usuario')
      });
}



loginUser({email, password}: any){
 return signInWithEmailAndPassword(this.auth,email,password)
}

logout(){
  return signOut(this.auth)
}


getNumber(): Observable<number> {
  return  this.numberSuject.asObservable()
}

getUserState():Observable<boolean> {
  return  this.stateUserSubject.asObservable()
}

setUserState(value:boolean):void {
  this.stateUserSubject.next(value);
}

setNumber(value: number): void {
  this.numberSuject.next(value);
}




async addUser(user: User){
  const dataUser = {
    name: user.name,
    lastName:user.lastName,
    address: user.address,
    email: user.email,
    telePhone: user.telePhone,
    profile: user.profile,

  }
  let addUser:boolean =  true
  const userRef = collection(this.firestore,'users')
  const queryUser = query(userRef, where('email', '==', user.email));
  const queryS = await getDocs(queryUser);
  queryS.forEach(async (doc) => {
    if(doc.exists()){
      alert('el usuario ya esta registrado')
      addUser = false
    }
  });

  if(addUser){
    of(addDoc(userRef,dataUser)).subscribe(
      {
        next: () =>{
          createUserWithEmailAndPassword(this.auth,user.email,user.dni)
          alert('user added successfully')
        },
        error:() =>{
          alert('user could not be added')
        }
      }
    )
    addUser = true
  }
}


}

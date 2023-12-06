import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, updateDoc } from '@angular/fire/firestore';
import { User } from '../models/users-models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firestore: Firestore) { }

  adduser(user: UserService) {
    const userRef = collection(this.firestore, 'users');
    return addDoc(userRef, user);
  }

  getusers(): Observable<User[]> {
    const userRef = collection(this.firestore, 'users');
    return collectionData(userRef, { idField: 'id' }) as Observable<User[]>;
  }

  getuserId(): Observable<User[]> {
    const userRef = collection(this.firestore, 'users');
    return collectionData(userRef, { idField: 'id' }) as Observable<User[]>;
  }

  deleteuser(id: any) {
    const userRef = doc(this.firestore, `users/${id}`);
    return deleteDoc(userRef);
  }

    updateuser(user: User, id: any) {
    const userRef = doc(this.firestore, `users/${id}`);
    const updateUser = { ...user };
    return updateDoc(userRef, updateUser).then((message) =>{
      alert("Success upadate")
    }

    ).catch((error) => alert(error));
  }
}

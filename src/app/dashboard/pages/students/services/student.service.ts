import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, updateDoc } from '@angular/fire/firestore';
import { Student } from '../models/students-models';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor(private firestore: Firestore) { }

  adduser(user: Student) {
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

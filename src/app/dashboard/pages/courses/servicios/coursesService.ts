import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})

export class CoursesService {

  constructor(private firestore: Firestore) { }

  addCourse(course: Course) {
    const courseRef = collection(this.firestore, 'courses');
    return addDoc(courseRef, course);
  }

  getCourses(): Observable<Course[]> {
    const courseRef = collection(this.firestore, 'courses');
    return collectionData(courseRef, { idField: 'id' }) as Observable<Course[]>;
  }

  getCourseId(): Observable<Course[]> {
    const courseRef = collection(this.firestore, 'courses');
    return collectionData(courseRef, { idField: 'id' }) as Observable<Course[]>;
  }

  deleteCourse(id: any) {
    const courseRef = doc(this.firestore, `courses/${id}`);
    return deleteDoc(courseRef);
  }

    updateCourse(course: Course, id: any) {
    const courseRef = doc(this.firestore, `courses/${id}`);
    const updatedCourse = { ...course };
    return updateDoc(courseRef, updatedCourse).then((message) =>{
      alert("Success upadate")
    }

    ).catch((error) => alert(error));
  }
}

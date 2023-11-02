import { Injectable } from '@angular/core';
import { Course } from './models';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  courses: Course[] = [
    {
      id: 1,
      type: 'curso',
      name: 'JavaScript',
      price: 1080,
      category: 'Programación y Desarrollo',
      endDate: '12-04-23',
      startDate: '12-04-24',
      image:" https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
    },
    {
      id: 2,
      type: 'curso',
      name: 'Desarrollo web',
      price: 1080,
      category: 'Programación y Desarrollo',
      endDate: '12-04-23',
      startDate: '12-04-24',
      image:" https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
    },
    {
      id: 3,
      type: 'carrera',
      name: 'Ingeniería de Sistemas',
      price: 5000,
      category: 'Informática y Tecnología',
      endDate: '12-04-27',
      startDate: '12-04-24',
      image:" https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    },
    {
      id: 4,
      type: 'curso',
      name: 'Desarrollo de aplicaciones móviles',
      price: 1200,
      category: 'Programación y Desarrollo',
      endDate: '12-04-30',
      startDate: '12-04-27',
      image:" https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"

    },
    {
      id: 5,
      type: 'carrera',
      name: 'Ciencia de datos',
      price: 6000,
      category: 'Informática y Tecnología',
      endDate: '12-05-01',
      startDate: '12-04-30',
      image:" https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
    },
    {
      id: 6,
      type: 'curso',
      name: 'Programación en C++',
      price: 900,
      category: 'Programación y Desarrollo',
      endDate: '12-05-04',
      startDate: '12-05-01',
      image:" https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"

    },
    {
      id: 7,
      type: 'curso',
      name: 'Programación en Python',
      price: 1200,
      category: 'Programación y Desarrollo',
      endDate: '12-05-07',
      startDate: '12-05-04',
      image:" https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"

    },
    {
      id: 8,
      type: 'carrera',
      name: 'Ingeniería en Software',
      price: 8000,
      category: 'Informática y Tecnología',
      endDate: '12-05-10',
      startDate: '12-05-07',
      image:" https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"

    },
    {
      id: 9,
      type: 'curso',
      name: 'Desarrollo de videojuegos',
      price: 1500,
      category: 'Programación y Desarrollo',
      endDate: '12-05-13',
      startDate: '12-05-10',
      image:" https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"

    },
    {
      id: 10,
      type: 'carrera',
      name: 'Ingeniería en Sistemas de Información',
      price: 7000,
      category: 'Informática y Tecnología',
      endDate: '12-05-16',
      startDate: '12-05-13',
      image:" https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"

    },
    {
      id: 11,
      type: 'curso',
      name: 'Programación en Java',
      price: 1000,
      category: 'Programación y Desarrollo',
      endDate: '12-05-19',
      startDate: '12-05-16',
      image:" https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"

    },
    {
      id: 12,
      type: 'curso',
      name: 'Programación en PHP',
      price: 800,
      category: 'Programación y Desarrollo',
      endDate: '12-05-22',
      image:" https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      startDate: '12-05-19',
    },
    {
      id: 13,
      type: 'carrera',
      name: 'Seguridad informática',
      price: 5500,
      category: 'Informática y Tecnología',
      endDate: '12-05-25',
      startDate: '12-05-22',
      image:" https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"

    },
    {
      id: 14,
      type: 'curso',
      name: 'Programación en Ruby',
      price: 1500,
      category: 'Programación y Desarrollo',
      endDate: '12-05-28',
      startDate: '12-05-25',
      image:" https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"

    },
    {
      id: 15,
      type: 'carrera',
      name: 'Inteligencia Artificial',
      price: 9000,
      category: 'Informática y Tecnología',
      endDate: '12-06-01',
      startDate: '12-05-28',
      image:" https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"

    },
    {
      id: 16,
      type: 'curso',
      name: 'Programación en Swift',
      price: 1200,
      category: 'Programación y Desarrollo',
      endDate: '12-06-04',
      startDate: '12-06-01',
      image:" https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"

    },
    {
      id: 17,
      type: 'curso',
      name: 'Programación en TypeScript',
      price: 1000,
      category: 'Programación y Desarrollo',
      endDate: '12-06-07',
      startDate: '12-06-04',
      image:" https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"

    },
    {
      id: 18,
      type: 'carrera',
      name: 'Arquitectura de Software',
      price: 7500,
      category: 'Informática y Tecnología',
      endDate: '12-06-10',
      startDate: '12-06-07',
      image:" https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"

    },
    {
      id: 19,
      type: 'curso',
      name: 'Desarrollo de aplicaciones web con React',
      price: 1500,
      category: 'Programación y Desarrollo',
      endDate: '12-06-13',
      startDate: '12-06-10',
      image:" https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"

    },
    {
      id: 20,
      type: 'carrera',
      name: 'Big Data',
      price: 8500,
      category: 'Informática y Tecnología',
      endDate: '12-06-16',
      startDate: '12-06-13',
      image:" https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"

    },
  ];

  getCourses$(): Observable<Course[]> {
    return of(this.courses);
  }

  createCourse$(payload: Course): Observable<Course[]> {
    this.courses.push(payload);
    return of([...this.courses]);
  }

  editCourse$(id: number, payload: Course): Observable<Course[]> {
    return of(
      this.courses.map((c) => (c.id === id ? { ...c, ...payload } : c))
    );
  }

  deleteCourse$(id: number): Observable<Course[]> {
    this.courses = this.courses.filter((c) => c.id !== id);
    return of(this.courses);
  }

  getCourseById$(id: number): Observable<Course | undefined> {
    return of(this.courses.find((c) => c.id === id));
  }
}

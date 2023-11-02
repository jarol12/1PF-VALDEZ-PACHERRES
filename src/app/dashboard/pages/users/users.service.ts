import { Injectable } from '@angular/core';
import { User } from './models/users';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: User[] = [
    {
      position: 1,
      name: "Juan",
      lastName: "Pérez",
      phone: "1234567890",
      address: "Calle Principal 123",
      email: "juanperez@email.com"
    },
    {
      position: 2,
      name: "María",
      lastName: "González",
      phone: "0987654321",
      address: "Avenida Central 456",
      email: "mariagonzalez@mail.com"
    },
    {
      position: 3,
      name: "Carlos",
      lastName: "Ramírez",
      phone: "5555555555",
      address: "Calle Secundaria 789",
      email: "carlosramirez@email.com"
    },
    {
      position: 4,
      name: "Laura",
      lastName: "López",
      phone: "6666666666",
      address: "Avenida Norte 321",
      email: "lauralopez@mail.com"
    },
    {
      position: 5,
      name: "Pedro",
      lastName: "Sánchez",
      phone: "7777777777",
      address: "Calle Este 654",
      email: "pedrosanchez@mail.com"
    },
    {
      position: 6,
      name: "Ana",
      lastName: "Martínez",
      phone: "8888888888",
      address: "Avenida Oeste 987",
      email: "anamartinez@mail.com"
    },
    {
      position: 7,
      name: "Luis",
      lastName: "Hernández",
      phone: "9999999999",
      address: "Calle Sur 456",
      email: "luishernandez@mail.com"
    },
    {
      position: 8,
      name: "Marta",
      lastName: "Díaz",
      phone: "0000000000",
      address: "Avenida Central 555",
      email: "martadiaz@mail.com"
    }
  ];

  constructor() { }
  getUsers$(): Observable<User[]> {
    return of(this.users);
  }

  createUser$(payload: User): Observable<User[]> {
    this.users.push(payload);
    return of([...this.users]);
  }

  editCourse$(id: number, payload: User): Observable<User[]> {
    return of(
      this.users.map((c) => (c.position === id ? { ...c, ...payload } : c))
    );
  }

  deleteUsers$(id: number): Observable<User[]> {
    this.users = this.users.filter((c) => c.position !== id);
    return of(this.users);
  }
}

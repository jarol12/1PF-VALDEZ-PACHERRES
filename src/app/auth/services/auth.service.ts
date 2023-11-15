import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, map, of,tap } from 'rxjs';
import { User } from 'src/app/dashboard/pages/users/models/users';
import { environment } from 'src/environments/environment.local';
import { LoginPayload } from '../models';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _authUser$ = new BehaviorSubject<User | null>(null);

  public authUser$ = this._authUser$.asObservable();
  public noUsuarios: boolean = false;
  constructor(private httpClient: HttpClient, private router: Router) {}

  login(payload: LoginPayload): Observable<any> {
    this.noUsuarios = false;
    return this.httpClient.get<User[]>(
      `${environment.baseUrl}/users?email=${payload.email}&password=${payload.password}`
    ).pipe(
      tap(response => {
        if(response.length){
          this.router.navigate(['/dashboard/home']);
        }else{
        this.noUsuarios = true
      }
      }),
    )
  }


  verifyToken(): Observable<boolean> {
    return this.httpClient
      .get<User[]>(
        `${environment.baseUrl}/users?token=dvddfsfffffffff`
      )
      .pipe(
        map((users) => {
          if (!users.length) {
            return false;
          } else {
            const authUser = users[0];
            this._authUser$.next(authUser);
            return true;
          }
        })
      );
  }

  logout(): void {
    this._authUser$.next(null);
    localStorage.removeItem('token');
    this.router.navigate(['/auth/login']);
  }
}

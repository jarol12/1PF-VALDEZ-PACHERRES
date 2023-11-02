import { Component } from '@angular/core';
import { User } from './models/users';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from './componets/user-dialog/user-dialog.component';
import { UsersService } from "./users.service";
import { Observable } from 'rxjs';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  userName = ''
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
    sar=''

    condicion1 = false;
    users$: Observable<User[]>;

    constructor(
      private usersService: UsersService,
      private matDialog: MatDialog,
    ) {
      this.users$ = this.usersService.getUsers$();
    }


    changeCondition(): void{
      this.condicion1?this.condicion1=false:this.condicion1 = true
    }

    onDeleteCourse(courseId: number): void {
      this.users$ = this.usersService.deleteUsers$(courseId);
    }


    openUsersDialog(event: string): void {
      this.sar = event
      this.condicion1 = false
      this.matDialog
        .open(UserDialogComponent,{data: this.sar})
        .afterClosed()
        .subscribe({
          next: (v) => {
           const index = this.users[this.users.length-1].position
      
            if(!!v){
              this.users = [
                ...this.users,{
                  ...v,
                  position: index + 1
                }
              ]
            }

          },
        });
    }
}

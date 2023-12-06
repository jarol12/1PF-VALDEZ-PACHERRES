import { Component } from '@angular/core';
import { User } from './models/users-models';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from './componets/user-dialog/user-dialog.component';
import { UserService } from './services/user.service';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  users$: Observable<User[]>;
  constructor(
    private matDialog: MatDialog,
    private usersService: UserService,
    private authService: AuthService
    ){
     this.users$ =  this.usersService.getusers()
  }

  addUser(): void {
    this.matDialog
      .open(UserDialogComponent, {
        width:"50%"
      })
      .afterClosed()
      .subscribe({
        next: async (v) => {
          if (!!v) {
           await this.authService.addUser(v)
          }
        },
      });
  }

  onEditUser(user: User): void {
    this.matDialog
      .open(UserDialogComponent, {
        data: user,
        width: "50%"
      })
      .afterClosed()
      .subscribe({
        next: (v) => {
          if (!!v) {
            this.usersService.updateuser(v,user.id)
          }
        },
      });
  }

  onDeleteUser(userId: number): void {
    if (confirm('Esta seguro?')) {
      this.usersService.deleteuser(userId)
    }
  }
}

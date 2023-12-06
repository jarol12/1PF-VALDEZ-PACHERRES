import { Component } from '@angular/core';
import { User } from '../users/models/users-models';
import { Observable } from 'rxjs';
import { StudentDialogComponent } from './components/student-dialog/student-dialog.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent {
  //students$: Observable<User[]>;
  //constructor(private usersService: StudentsService, private matDialog: MatDialog,){

  //  this.students$ = this.usersService.getUsers$();
  }




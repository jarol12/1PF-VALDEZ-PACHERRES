import { Component } from '@angular/core';
import { StudentsService } from './students.service';
import { User } from '../users/models/users';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent {
  students$: Observable<User[]>;
  constructor(private usersService: StudentsService,){
    this.students$ = this.usersService.getUsers$();
  }
}

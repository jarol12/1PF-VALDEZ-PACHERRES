import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { EnrollmentsService } from './enrollments.service';
import { User } from '../users/models/users';

@Component({
  selector: 'app-enrollments',
  templateUrl: './enrollments.component.html',
  styleUrls: ['./enrollments.component.scss']
})
export class EnrollmentsComponent {
  enrrollments$: Observable<User[]>;
  constructor(private enrollmentsService: EnrollmentsService,){
    this.enrrollments$ = this.enrollmentsService.getUsers$();
  }
}

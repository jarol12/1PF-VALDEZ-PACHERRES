import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { EnrollmentsService } from './enrollments.service';
import { User } from '../users/models/users-models';
import { MatDialog } from '@angular/material/dialog';
import { EnrollmentDialogComponent } from './components/enrollment-dialog/enrollment-dialog.component';

@Component({
  selector: 'app-enrollments',
  templateUrl: './enrollments.component.html',
  styleUrls: ['./enrollments.component.scss']
})
export class EnrollmentsComponent {
  constructor( private matDialog: MatDialog,){
  }

  addUser(): void {
    this.matDialog
      .open(EnrollmentDialogComponent)
      .afterClosed()
      .subscribe({
        next: (v) => {
          if (!!v) {
          }
        },
      });
  }
  }


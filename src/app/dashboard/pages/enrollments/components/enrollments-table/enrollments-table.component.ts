import { SelectionModel } from '@angular/cdk/collections';
import { Component, Input } from '@angular/core';
import { User } from '../../../users/models/users';

@Component({
  selector: 'app-enrollments-table',
  templateUrl: './enrollments-table.component.html',
  styleUrls: ['./enrollments-table.component.scss']
})
export class EnrollmentsTableComponent {
  displayedColumns: string[] = ['position', 'fullName', 'address', 'phone', 'email','trans'];
  @Input() dataSource!: User[];
  selection = new SelectionModel<User>(true, []);
}

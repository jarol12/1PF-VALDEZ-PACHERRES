import { SelectionModel } from '@angular/cdk/collections';
import { Component, Input } from '@angular/core';
import { User } from '../../../users/models/users';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.scss']
})
export class StudentsTableComponent {
  displayedColumns: string[] = ['position', 'fullName', 'address', 'phone', 'email','trans'];
  @Input() dataSource!: User[];
  selection = new SelectionModel<User>(true, []);
}


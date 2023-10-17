import { SelectionModel } from '@angular/cdk/collections';
import { Component, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { User } from '../../models/users';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss'],
})
export class UserTableComponent {
  displayedColumns: string[] = ['position', 'fullName', 'address', 'phone', 'email'];
  @Input() dataSource!: User[];
  selection = new SelectionModel<User>(true, []);
}

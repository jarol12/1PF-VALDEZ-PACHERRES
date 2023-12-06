
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../models/users-models';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss'],
})
export class UserTableComponent {

  @Input() dataSource!: User[];

  constructor(){

  }
displayedColumns: string[] = ['fullName', 'address', 'cellPhone', 'email', 'actions'];

  @Output()
  updateUser = new EventEmitter<User>();

  @Output()
  deleteUser = new EventEmitter<number>();

  @Output()
  editUser = new EventEmitter<User>();



}

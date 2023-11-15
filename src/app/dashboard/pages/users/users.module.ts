import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDialogComponent } from './componets/user-dialog/user-dialog.component';
import { UserTableComponent } from './componets/user-table/user-table.component';
import { UsersComponent } from './users.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { UserIdComponent } from './componets/user-id/user-id.component';
import { UsersRoutingModule } from './user-routing.module';
import { TableUserComponent } from './componets/user-id/components/table-user/table-user.component';




@NgModule({
  declarations: [
    UserDialogComponent,
    UserTableComponent,
    UsersComponent,
    UserIdComponent,
    TableUserComponent
  ],
  imports: [
    UsersRoutingModule,
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports:[UsersComponent]
})
export class UsersModule { }

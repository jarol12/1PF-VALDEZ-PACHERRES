import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDialogComponent } from './componets/user-dialog/user-dialog.component';
import { UserTableComponent } from './componets/user-table/user-table.component';
import { UsersComponent } from './users.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { UserIdComponent } from './user-id/user-id.component';




@NgModule({
  declarations: [
    UserDialogComponent,
    UserTableComponent,
    UsersComponent,
    UserIdComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports:[UsersComponent]
})
export class UsersModule { }

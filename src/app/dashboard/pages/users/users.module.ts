import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDialogComponent } from './componets/user-dialog/user-dialog.component';
import { UserTableComponent } from './componets/user-table/user-table.component';
import { UsersComponent } from './users.component';
import { SharedModule } from 'src/app/shared/shared.module';




@NgModule({
  declarations: [
    UserDialogComponent,
    UserTableComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[UsersComponent]
})
export class UsersModule { }

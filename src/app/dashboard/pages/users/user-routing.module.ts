import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { UsersComponent } from './users.component';
import { UserIdComponent } from './componets/user-id/user-id.component';
const routes: Routes = [
  {
    // /users
    path: '',
    component: UsersComponent,
  },
   {
  //   // /users/detail...
   path: ':id',
   component: UserIdComponent,
   },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}

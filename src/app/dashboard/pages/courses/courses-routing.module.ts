import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { CoursesComponent } from "./courses.component";
const routes: Routes = [
  {
    // /users
    path: '',
    component: CoursesComponent,
  },
   {
  //   // /users/detail...
   path: 'detail/:id',
   component: CoursesComponent ,
   },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class CourseRoutingModule {}

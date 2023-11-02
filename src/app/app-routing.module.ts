import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { CoursesComponent } from './dashboard/pages/courses/courses.component';
import { UsersComponent } from './dashboard/pages/users/users.component';
import { HomeComponent } from './dashboard/pages/home/home.component';
import { EnrollmentsComponent } from './dashboard/pages/enrollments/enrollments.component';
import { StudentsComponent } from './dashboard/pages/students/students.component';
import { UserIdComponent } from './dashboard/pages/users/user-id/user-id.component';
import { CourseDetailComponent } from './dashboard/pages/courses/components/course-detail/course-detail.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'courses',
        component: CoursesComponent,
      },
      {
        path: 'courses/:id',
        component: CourseDetailComponent,
      },
      {
        path: 'users',
        component: UsersComponent,
      },
      {
        path: 'users/:id',
        component: UserIdComponent,
      },

      {
        path: 'home',
        component: HomeComponent,
      },


      {
        path: 'enrollments',
        component: EnrollmentsComponent,
      },

      {
        path: 'students',
        component: StudentsComponent,
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: 'register',
    component: LoginComponent,
  },
  {
    path: 'forgot-pasword',
    component: LoginComponent,
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }

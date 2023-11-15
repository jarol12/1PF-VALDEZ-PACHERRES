import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { CourseDetailComponent } from './pages/courses/components/course-detail/course-detail.component';
import { UsersComponent } from './pages/users/users.component';
import { DashboardComponent } from './dashboard.component';


@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '', 
        component: DashboardComponent,
        children: [
          {
            path: 'home',
            component: HomeComponent,
          },

          {
            path: 'courses',
            /** hola_mundo */
            loadChildren: () =>
              import('./pages/courses/courses.module').then(
                (m) => m.CoursesModule
              ),
          },
          {
            path: "students",
            loadChildren: () =>
            import('./pages/students/students.module').then(
              (m) => m.StudentsModule
            ),
          },

          {
            path: 'users',
            loadChildren: () =>
              import('./pages/users/users.module').then((m) => m.UsersModule),
          },

          {
            path: 'enrollments',
            loadChildren: () =>
              import('./pages/enrollments/enrollments.module').then((m) => m.EnrollmentsModule),
          },

          {
            path: '**',
            redirectTo: 'home',
          },
        ],
      },

    ])]})

    export class DashboardRoutingModule {}

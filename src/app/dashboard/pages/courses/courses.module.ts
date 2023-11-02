import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';
import { RouterModule } from '@angular/router';
import { CourseRoutingModule } from './courses-routing.module';
import { CoursesDialogComponent } from './components/courses-dialog/courses-dialog.component';

@NgModule({
  declarations: [

    CourseDetailComponent,
     CoursesDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    CourseRoutingModule 
  ]
})
export class CoursesModule { }

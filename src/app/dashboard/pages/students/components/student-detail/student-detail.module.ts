import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentDetailComponent } from './student-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    StudentDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class StudentDetailModule { }

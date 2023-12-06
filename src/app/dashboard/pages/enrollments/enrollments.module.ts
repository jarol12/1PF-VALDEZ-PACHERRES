import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnrollmentsTableComponent } from './components/enrollments-table/enrollments-table.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EnrollmentsComponent } from './enrollments.component';
import { EnrollmentsRoutingModule } from './enrollments-routing.module';
import { EnrollmentDialogComponent } from './components/enrollment-dialog/enrollment-dialog.component';
@NgModule({
  declarations: [
    EnrollmentsComponent,
    EnrollmentsTableComponent,
    EnrollmentDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    EnrollmentsRoutingModule
  ]
})

export class EnrollmentsModule {

 }

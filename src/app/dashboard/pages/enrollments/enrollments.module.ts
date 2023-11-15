import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnrollmentsComponent } from './enrollments.component';
import { EnrollmentsTableComponent } from './components/enrollments-table/enrollments-table.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EnrollmentsRoutingModule } from './enrollments-routing.module';
@NgModule({
  declarations: [
    EnrollmentsComponent,
    EnrollmentsTableComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    EnrollmentsRoutingModule
  ]
})

export class EnrollmentsModule {

 }

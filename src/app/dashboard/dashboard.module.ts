import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatBadgeModule} from '@angular/material/badge';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { UsersModule } from './pages/users/users.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { CoursesComponent } from './pages/courses/courses.component';
import { StudentsModule } from './pages/students/students.module';
import { EnrollmentsModule } from './pages/enrollments/enrollments.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CoursesModule } from './pages/courses/courses.module';
@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
    ToolbarComponent,
    HomeComponent,
  ],
  imports: [
    MatMenuModule,
    DashboardRoutingModule,
    CommonModule,
    EnrollmentsModule,
    MatSidenavModule,
    MatToolbarModule,
    CoursesModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    StudentsModule,
    MatListModule,
    MatBadgeModule, MatButtonModule, MatIconModule,
    UsersModule,
    SharedModule
  ],
  exports: [DashboardComponent],

})
export class DashboardModule {
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}

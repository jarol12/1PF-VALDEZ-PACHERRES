import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from './models';
import { MatDialog } from '@angular/material/dialog';
import { CoursesService } from './courses.service';
import { CoursesDialogComponent } from './components/courses-dialog/courses-dialog.component';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  courses$: Observable<Course[]>;
  constructor(
    private coursesService: CoursesService,
    private matDialog: MatDialog

  ) {
    this.courses$ = this.coursesService.getCourses$();
  }
  panelOpenState = false;
  searchTerm: string =""
  applyFilter(event: Event){
    this.searchTerm = (event.target as HTMLInputElement).value;
    this.courses$ = this.coursesService.getCourses$().pipe(
      map(courses => courses.filter(course => course.name.toLowerCase().includes(this.searchTerm.toLowerCase())))
    );
  }

  onDeleteCourse(courseId: number): void {
    this.courses$ = this.coursesService.deleteCourse$(courseId);
  }

  onEditCourse(courseId: number): void {
    this.matDialog
      .open(CoursesDialogComponent, {
        data: courseId,
      })
      .afterClosed()
      .subscribe({
        next: (result) => {
          if (!!result) {
            this.courses$ = this.coursesService.editCourse$(courseId, result);
          }
        },
      });
  }

}

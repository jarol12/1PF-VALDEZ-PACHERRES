import { Component } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { Course } from './models/course';
import { MatDialog } from '@angular/material/dialog';
import { CoursesService } from './servicios/coursesService';
import { CoursesDialogComponent } from './components/courses-dialog/courses-dialog.component';
import { map } from 'rxjs/operators';
import { Location } from '@angular/common';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  courses$: Observable<Course[]>;
  currentUrl: string[];

  constructor(
    private coursesService: CoursesService,
    private matDialog: MatDialog,
    private location: Location

  ) {
    this.courses$ = this.coursesService.getCourses();
    this.currentUrl = this.location.path().split("/");
  }

ngOnit(){

}
  panelOpenState = false;
  searchTerm: string =""
  applyFilter(event: Event){
    this.searchTerm = (event.target as HTMLInputElement).value;
    this.courses$ = this.coursesService.getCourses().pipe(
      map(courses => courses.filter(course => course.name.toLowerCase().includes(this.searchTerm.toLowerCase())))
    );
  }



  addCourse(): void {
    this.matDialog
      .open(CoursesDialogComponent)
      .afterClosed()
      .subscribe({
        next: (result) => {
          if (result) {
            this.coursesService.addCourse(result).then(
              () => {
               alert("success")
              },
              (error) => {
                alert(error);
              }
              )
          }
        },
      });
  }

   updateCourse(courseId:any): void {
    this.matDialog
      .open(CoursesDialogComponent)
      .afterClosed()
      .subscribe({
        next: async(result) => {
         await this.coursesService.updateCourse(result,courseId);
        },
      });
  }




  async deleteCourse(id: any) {
    await this.coursesService.deleteCourse(id);
  }
}

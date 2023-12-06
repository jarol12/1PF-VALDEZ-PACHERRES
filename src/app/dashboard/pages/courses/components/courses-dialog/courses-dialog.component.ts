import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-courses-dialog',
  templateUrl: './courses-dialog.component.html',
  styleUrls: ['./courses-dialog.component.scss'],
})
export class CoursesDialogComponent {
  nameControl = new FormControl();
  priceControl = new FormControl();
  professorControl = new FormControl();
  hoursControl = new FormControl();
  classControl = new FormControl();
  typeControl = new  FormControl();
  categoryControl = new  FormControl();
  startDateControl = new FormControl();
  endDateControl = new FormControl();

  courseForm = new FormGroup({
    name: this.nameControl,
    startDate: this.startDateControl,
    endDate: this.endDateControl,
    professor: this.professorControl,
    category: this.categoryControl,
    price: this.priceControl,
    hours: this.hoursControl,
    class: this.classControl,
    type: this.typeControl,
  });

  constructor(
    private matDialogRef: MatDialogRef<CoursesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private courseId?: number
  ) {
    if (courseId) {


    }
  }

  public get isEditing(): boolean {
    return !!this.courseId;
  }

  onSubmit(): void {
    if (this.courseForm.invalid) {
      return this.courseForm.markAllAsTouched();
    } else {

      this.matDialogRef.close(this.courseForm.value);
    }
  }


  }

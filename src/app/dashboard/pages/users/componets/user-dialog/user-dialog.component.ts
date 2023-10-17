import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss']
})
export class UserDialogComponent {
  userForm: FormGroup;

  constructor(
    private fb:FormBuilder,
    private matDialogRef: MatDialogRef<UserDialogComponent>
    ){
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('[0-9]+')]]
    })
  }

  onSubmit(): void{

    if(this.userForm.invalid){
      this.userForm.markAllAsTouched();
    } else{
      this.matDialogRef.close(this.userForm.value)
    }
  }
}


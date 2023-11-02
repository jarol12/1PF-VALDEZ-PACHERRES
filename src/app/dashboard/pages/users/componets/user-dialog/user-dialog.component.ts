import { Component, Inject} from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsersService } from '../../users.service';
import { Observable, map } from 'rxjs';
import { User } from '../../models/users';
@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss']
})
export class UserDialogComponent {
  userForm: FormGroup;
  users$: Observable<User[]>;
  constructor(
    private fb:FormBuilder,
    private matDialogRef: MatDialogRef<UserDialogComponent>,
    private usersService: UsersService,
    @Inject(MAT_DIALOG_DATA) public data: any
    ){
    this.users$ = this.usersService.getUsers$();

    this.userForm = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('[0-9]+')]]
    })
  }

  ngOnInit() {
    console.log('Datos del usuario:', this.data);

  }

  user = 'add'
  onSubmit(): void{
    if(this.userForm.invalid){
      this.userForm.markAllAsTouched();
    } else{
      this.matDialogRef.close(this.userForm.value)
    }
  }

  searchTerm: string =""
  applyFilter(event: Event){
    this.searchTerm = (event.target as HTMLInputElement).value;
    this.users$ = this.usersService.getUsers$().pipe(
      map(users => users.filter(user => user.name.toLowerCase().includes(this.searchTerm.toLowerCase())))
    );
  }
 onDeleteCourse(courseId: number): void {
      this.users$ = this.usersService.deleteUsers$(courseId);
  }
}


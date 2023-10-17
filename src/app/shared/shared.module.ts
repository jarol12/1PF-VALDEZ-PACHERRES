import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSortModule} from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule} from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FullNamePipe } from './pipes/full-name.pipe';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FullNamePipe
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    MatTooltipModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSortModule,
    MatCheckboxModule,
    FormsModule,
    MatInputModule,
    FullNamePipe,
    MatDialogModule,
    ReactiveFormsModule
  ],
})
export class SharedModule { }

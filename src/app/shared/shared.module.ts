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
import { MatFormField } from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FullNamePipe } from './pipes/full-name.pipe';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { RouterModule } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';
import { DiscountPipe } from './pipes/discount.pipe';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatExpansionModule} from '@angular/material/expansion';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { FormErrorsPipe } from './pipes/form-errors.pipe';

@NgModule({
  declarations: [
    FullNamePipe,
    DiscountPipe,
    FormErrorsPipe
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    FormErrorsPipe,
    MatSelectModule,
    MatCardModule,
    RouterModule,
    HttpClientModule ,
    MatNativeDateModule,
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
    ReactiveFormsModule,
    MatListModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatTabsModule,
    MatExpansionModule,
    DiscountPipe,
    MatDatepickerModule,
    MatProgressSpinnerModule
  ],
})
export class SharedModule { }

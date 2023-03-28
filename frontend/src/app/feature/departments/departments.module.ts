import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { PrimeModule } from 'src/app/shared/primeNg/prime.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import * as fromDepartment from './store/department.reducer';
import { EffectsModule } from '@ngrx/effects';
import { DepartmentEffects } from './store/department.effects';
  import { addDepReducer, addDepartmentFeatureKey } from './add-department/add-department.reducer';
import { NgrxFormsModule } from 'ngrx-forms';
 

@NgModule({
  declarations: [AddDepartmentComponent],
  imports: [
    CommonModule,
    PrimeModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgrxFormsModule,
    StoreModule.forFeature(
      fromDepartment.departmentsFeatureKey,
      fromDepartment.reducer
    ),
    StoreModule.forFeature(addDepartmentFeatureKey, addDepReducer),
    EffectsModule.forFeature([DepartmentEffects]),
  ],
})
export class DepartmentsModule {}

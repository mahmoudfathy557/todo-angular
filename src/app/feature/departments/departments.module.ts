import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { PrimeModule } from 'src/app/shared/primeNg/prime.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddDepartmentComponent
  ],
  imports: [
    CommonModule,
    PrimeModule,
    ReactiveFormsModule,
   
  ]
})
export class DepartmentsModule { }

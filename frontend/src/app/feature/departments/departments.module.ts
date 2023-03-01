import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { PrimeModule } from 'src/app/shared/primeNg/prime.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AddDepartmentComponent
  ],
  imports: [
    CommonModule,
    PrimeModule,
    ReactiveFormsModule,
    FormsModule, BrowserAnimationsModule, HttpClientModule
   
  ]
})
export class DepartmentsModule { }

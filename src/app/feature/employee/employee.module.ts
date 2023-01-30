import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { MatModule } from 'src/app/shared/mat/mat.module';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EmployeeListComponent,
    AddEmployeeComponent
  ],
  imports: [
    CommonModule,
    MatModule,
    ReactiveFormsModule
  ],
  exports:[
    EmployeeListComponent  ]
})
export class EmployeeModule { }

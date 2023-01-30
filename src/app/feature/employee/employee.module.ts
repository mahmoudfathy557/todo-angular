import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { MatModule } from 'src/app/shared/mat/mat.module';
<<<<<<< HEAD
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ReactiveFormsModule } from '@angular/forms';

=======
>>>>>>> c225999c3ff96ed89bab26d84f33e3a7628ee015


@NgModule({
  declarations: [
<<<<<<< HEAD
    EmployeeListComponent,
    AddEmployeeComponent
  ],
  imports: [
    CommonModule,
    MatModule,
    ReactiveFormsModule
=======
    EmployeeListComponent
  ],
  imports: [
    CommonModule,
    MatModule
>>>>>>> c225999c3ff96ed89bab26d84f33e3a7628ee015
  ],
  exports:[
    EmployeeListComponent  ]
})
export class EmployeeModule { }

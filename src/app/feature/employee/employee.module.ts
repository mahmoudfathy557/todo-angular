import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { MatModule } from 'src/app/shared/mat/mat.module';


@NgModule({
  declarations: [
    EmployeeListComponent
  ],
  imports: [
    CommonModule,
    MatModule
  ],
  exports:[
    EmployeeListComponent  ]
})
export class EmployeeModule { }

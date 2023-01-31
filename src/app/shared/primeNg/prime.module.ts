import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';
 import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
  declarations: [
     
  ],
  imports: [
    CommonModule,
    
    FormsModule,
    TableModule,
    ButtonModule,
    InputTextModule
  ],
  exports:[
     TableModule,
    ButtonModule,
    InputTextModule

  ]
})
export class PrimeModule { }

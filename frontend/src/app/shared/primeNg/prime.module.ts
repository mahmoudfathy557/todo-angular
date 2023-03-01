import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';
 import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';

@NgModule({
  declarations: [
     
  ],
  imports: [
    CommonModule,
    
    FormsModule,
    TableModule,
    ButtonModule,
    InputTextModule, MessagesModule, MessageModule
  ],
  exports:[
     TableModule,
    ButtonModule,
    InputTextModule, MessageModule, MessagesModule

  ]
})
export class PrimeModule { }

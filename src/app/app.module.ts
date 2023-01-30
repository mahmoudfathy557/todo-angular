import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AppRoutingModule,
  //  routingComponents 
  } from './app-routing.module';
 

import { AppComponent } from './app.component';
 
import { ButtonComponent } from './components/button/button.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
 
import { PageNotFpundComponent } from './components/page-not-fpund/page-not-fpund.component';
import { HeaderComponent } from './components/header/header.component';
import { EmployeeModule } from './feature/employee/employee.module';
import { MatModule } from './shared/mat/mat.module';
  


@NgModule({
  declarations: [
    AppComponent,
  
    ButtonComponent,
    TasksComponent,
    TaskItemComponent,
    AddTaskComponent,
    FooterComponent,
    HeaderComponent,
    // routingComponents,
    PageNotFpundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    MatModule,
    EmployeeModule
     
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

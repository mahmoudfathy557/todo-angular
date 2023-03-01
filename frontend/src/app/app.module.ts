import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  AppRoutingModule,
  //  routingComponents
} from './app-routing.module';

import { AppComponent } from './app.component';

import { EmployeeModule } from './feature/employee/employee.module';
import { MatModule } from './shared/mat/mat.module';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { PrimeModule } from './shared/primeNg/prime.module';
import { HomeComponent } from './feature/home/home.component';
import { HomeModule } from './feature/home/home.module';
import { DepartmentsListComponent } from './feature/departments/departments-list/departments-list.component';
import { DepartmentsModule } from './feature/departments/departments.module';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent, HomeComponent, DepartmentsListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    MatModule,
    EmployeeModule,
    DepartmentsModule,
    ReactiveFormsModule,
    PrimeModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

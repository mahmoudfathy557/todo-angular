 import { AddEmployeeComponent } from './feature/employee/add-employee/add-employee.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './feature/employee/employee-list/employee-list.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { HomeComponent } from './feature/home/home.component';
import { DepartmentsListComponent } from './feature/departments/departments-list/departments-list.component';
import { AddDepartmentComponent } from './feature/departments/add-department/add-department.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, //default router
  // { path: '', redirectTo: 'tasks', pathMatch: 'full' }, //default router
  { path: 'employees', component: EmployeeListComponent },
  { path: 'departments', component: DepartmentsListComponent },
  { path: 'add-emp', component: AddEmployeeComponent },
   { path: 'edit-emp/:id', component: AddEmployeeComponent },

  { path: 'add-dep', component: AddDepartmentComponent },
  { path: 'edit-dep/:id', component: AddDepartmentComponent },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


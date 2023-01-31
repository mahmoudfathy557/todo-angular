import { AddEmployeeComponent } from './feature/employee/add-employee/add-employee.component';
 import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
  import { PageNotFpundComponent } from './components/page-not-fpund/page-not-fpund.component';
import { EmployeeListComponent } from './feature/employee/employee-list/employee-list.component';
  
const routes: Routes = [
  { path: '', component: EmployeeListComponent }, //default router
  // { path: '', redirectTo: 'tasks', pathMatch: 'full' }, //default router
  { path: 'add-emp', component: AddEmployeeComponent },
  { path: 'edit-emp/:id', component: AddEmployeeComponent },
   { path: '**', component: PageNotFpundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 

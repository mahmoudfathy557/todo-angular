import { AddEmployeeComponent } from './feature/employee/add-employee/add-employee.component';
 import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
 import { PageNotFpundComponent } from './components/page-not-fpund/page-not-fpund.component';
import { EmployeeListComponent } from './feature/employee/employee-list/employee-list.component';
import { FormComponent } from './shared/mat/form/form.component';
 
const routes: Routes = [
  { path: '', component: EmployeeListComponent }, //default router
  // { path: '', redirectTo: 'tasks', pathMatch: 'full' }, //default router
  { path: 'add-emp', component: AddEmployeeComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: PageNotFpundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const routingComponents = [TasksComponent,
//   AboutComponent,
  
//    ]

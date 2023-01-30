<<<<<<< HEAD
import { AddEmployeeComponent } from './feature/employee/add-employee/add-employee.component';
 import { NgModule } from '@angular/core';
=======
import { MatModule } from './shared/mat/mat.module';
import { NgModule } from '@angular/core';
>>>>>>> c225999c3ff96ed89bab26d84f33e3a7628ee015
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
 import { PageNotFpundComponent } from './components/page-not-fpund/page-not-fpund.component';
import { EmployeeListComponent } from './feature/employee/employee-list/employee-list.component';
<<<<<<< HEAD
import { FormComponent } from './shared/mat/form/form.component';
=======
>>>>>>> c225999c3ff96ed89bab26d84f33e3a7628ee015
 
const routes: Routes = [
  { path: '', component: EmployeeListComponent }, //default router
  // { path: '', redirectTo: 'tasks', pathMatch: 'full' }, //default router
<<<<<<< HEAD
  { path: 'add-emp', component: AddEmployeeComponent },
=======
  // { path: 'tasks', component: TasksComponent },
>>>>>>> c225999c3ff96ed89bab26d84f33e3a7628ee015
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

import { MatModule } from './shared/mat/mat.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './components/tasks/tasks.component';
import { AboutComponent } from './components/about/about.component';
 import { PageNotFpundComponent } from './components/page-not-fpund/page-not-fpund.component';
import { EmployeeListComponent } from './feature/employee/employee-list/employee-list.component';
 
 

const routes: Routes = [
  { path: '', component: EmployeeListComponent }, //default router
  // { path: '', redirectTo: 'tasks', pathMatch: 'full' }, //default router
  // { path: 'tasks', component: TasksComponent },
  { path: 'about', component: AboutComponent },
 
 
  { path: '**', component: PageNotFpundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [TasksComponent,
  AboutComponent,
  
   ]

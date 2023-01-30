import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
;
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
<<<<<<< HEAD
import { ReactiveFormsModule } from '@angular/forms';

=======
 
>>>>>>> c225999c3ff96ed89bab26d84f33e3a7628ee015
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MainNavComponent } from './main-nav/main-nav.component';
import { DataTableComponent } from './data-table/data-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
<<<<<<< HEAD
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
 
 
]
=======
 

>>>>>>> c225999c3ff96ed89bab26d84f33e3a7628ee015

@NgModule({
  declarations: [
    MainNavComponent,
<<<<<<< HEAD
    DataTableComponent,
    FormComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
=======
    DataTableComponent
  ],
  imports: [
>>>>>>> c225999c3ff96ed89bab26d84f33e3a7628ee015
    CommonModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
<<<<<<< HEAD
    MatFormFieldModule,
    MatSortModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule

  ],
  exports:[
    RouterModule,
    MainNavComponent,
    DataTableComponent,
FormComponent,
=======
    MatSortModule,
  ],
  exports:[
    MainNavComponent,
    DataTableComponent

>>>>>>> c225999c3ff96ed89bab26d84f33e3a7628ee015
  ]
})
export class MatModule { }

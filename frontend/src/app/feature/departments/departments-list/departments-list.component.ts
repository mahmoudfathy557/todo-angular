import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Department } from '../department.model';
 
import { Observable } from 'rxjs';
import { DepartmentState } from '../store/department.reducer';
import { Store, select } from '@ngrx/store';
import { selectDepartments } from '../store/department.selectors';
import { deleteDepartment, loadDepartments } from '../store/department.actions';
 
@Component({
  selector: 'app-departments-list',
  templateUrl: './departments-list.component.html',
  styles: ['.card { width: 70% }'],
})
export class DepartmentsListComponent implements OnInit {
  deps: Department[];
  deps$!: Observable<Department[]>;
  loading: boolean;

  cols: any[];

  constructor(private apollo: Apollo, private store: Store<DepartmentState>) {}

  async getDeps() {
    this.store.dispatch(loadDepartments());

    this.deps$ = this.store.pipe(select(selectDepartments));
     
     
  }

  ngOnInit() {
    this.getDeps();
    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'name', header: 'Name' },
      { field: 'manager', header: 'Manager' },
      { field: 'emps_no', header: 'Employees No' },
      { field: 'actions', header: 'Actions' },
    ];
  }

  deleteDep(dep: Department) {
    this.store.dispatch(deleteDepartment({ id: String(dep.id) }));
  }
}

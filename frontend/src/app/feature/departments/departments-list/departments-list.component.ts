import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Department } from '../department';
import {
  GET_DEPARTMENT,
  GET_DEPARTMENTS,
  REMOVE_DEPARTMENT,
} from '../graphql-queries';

@Component({
  selector: 'app-departments-list',
  templateUrl: './departments-list.component.html',
  styles: ['.card { width: 70% }'],
})
export class DepartmentsListComponent implements OnInit {
  deps: Department[];
  loading: boolean;

  cols: any[];

  constructor(private apollo: Apollo) {}

  // getDep() {
  //   return this.apollo
  //     .watchQuery<any>({
  //       query: GET_DEPARTMENT,
  //       variables: { departmentId: '63f211f08604c2651986c027' },
  //     })
  //     .valueChanges.subscribe(({ data, loading }) => {
  //       console.log(data);
  //     });
  // }

  async getDeps() {
    return this.apollo
      .watchQuery<any>({
        query: GET_DEPARTMENTS,
      })
      .valueChanges.subscribe(({ data, loading }) => {
         this.loading = loading;
        this.deps = data.departments;
      });
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
      this.apollo
        .mutate({
          mutation: REMOVE_DEPARTMENT,
          variables: {
            removeDepartmentId: dep.id,
          },
          refetchQueries: [{ query: GET_DEPARTMENTS }],
        })
        .subscribe(
          ({ data }) => {
            console.log('got data', data);
           },
          (error) => {
            console.log('there was an error sending the query', error);
          }
        );
 
  }
}

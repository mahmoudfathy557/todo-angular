import { gql, Mutation, Query } from 'apollo-angular';
import { Injectable } from '@angular/core';
import { Department } from './department';

 
export interface Response {
  departments: Department[];
}

@Injectable({
  providedIn: 'root',
})
export class AllDepartmentsGQL extends Query<Response> {
  override document = gql`
    query getDepartments {
      departments {
        id
        name
        manager
        emps_no
      }
    }
  `;
}

@Injectable({
  providedIn: 'root',
})
export class RemoveDepartmentGQL extends Mutation {
  override document = gql`
    mutation removeDepartment($removeDepartmentId: String!) {
      removeDepartment(id: $removeDepartmentId) {
        id
        emps_no
        manager
        name
      }
    }
  `;
}

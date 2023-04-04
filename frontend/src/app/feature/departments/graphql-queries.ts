// import { gql } from 'apollo-angular';

import { gql } from './graphql.service';

export const GET_DEPARTMENTS = gql`
  query getDepartments {
    departments {
      id
      name
      manager
      emps_no
    }
  }
`;

export const GET_DEPARTMENT = gql`
  query getDepartment($departmentId: String!) {
    department(id: $departmentId) {
      emps_no
      id
      manager
      name
    }
  }
`;

export const ADD_DEPARTMENT = gql`
  mutation AddDepartment($newDepartmentData: CreateDepartmentDto!) {
    addDepartment(newDepartmentData: $newDepartmentData) {
      emps_no
      id
      manager
      name
    }
  }
`;

export const REMOVE_DEPARTMENT = gql`
  mutation removeDepartment($removeDepartmentId: String!) {
    removeDepartment(id: $removeDepartmentId) {
      emps_no
      id
      manager
      name
    }
  }
`;

export const UPDATE_DEPARTMENT = gql`
  mutation updateDepartment(
    $updateDepartmentId: String!
    $updatedDepartmentData: UpdateDepartmentDto!
  ) {
    updateDepartment(
      id: $updateDepartmentId
      updatedDepartmentData: $updatedDepartmentData
    ) {
      emps_no
      id
      manager
      name
    }
  }
`;

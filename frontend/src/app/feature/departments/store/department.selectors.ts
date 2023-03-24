 import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
 DepartmentState,
    departmentsFeatureKey,
   selectAll,
 } from './department.reducer';
 
 
// All Departments
export const selectDepartmentsFeature =
  createFeatureSelector<DepartmentState>(departmentsFeatureKey);

export const selectDepartments = createSelector(selectDepartmentsFeature, (state:DepartmentState)=>state.departments);

export const selectedDepartment = createSelector(
  selectDepartmentsFeature,
  (state: DepartmentState) => state.selectedDepartment
);

export const selectError = createSelector(
  selectDepartmentsFeature,
  (state: DepartmentState) => state.error
);

 
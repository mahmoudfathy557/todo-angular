import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Department } from '../department.model';

//  Get All Departments
export const loadDepartments = createAction(
  '[Department List Component] Load Departments', 
 );

export const loadDepartmentsSuccess = createAction(
  '[Department List Effect] Load Departments Success',
  props<{ departments: Department[] }>()
);

export const loadDepartmentsFailure = createAction(
  '[Department List Effect] Load Departments Failure',
  props<{ error: any }>()
);


// Add Department
export const addDepartment = createAction(
  '[Department Add Component] Add Department',
  props<{ department: Department }>()
);

export const addDepartmentSuccess = createAction(
  '[Department Add Effect] Add Department Success',
  props<{ department: Department }>()
);

export const addDepartmentFailure = createAction(
  '[Department Add Effect] Add Department Failure',
  props<{ error: any }>()
);


// Get One Department
export const loadDepartment = createAction(
  '[Department Component] load Department',
  props<{ id: string }>()
);

export const loadDepartmentSuccess = createAction(
  '[Department Effect] Load Department Success',
  props<{ selectedDepartment: Department }>()
);

export const loadDepartmentFailure = createAction(
  '[Department Effect] Load Department Failure',
  props<{ error: any }>()
);


export const updateDepartment = createAction(
  '[Department Add Component ] Update Department',
  props<{ department: Update<Department> }>()
);

 

// Delete One Department
export const deleteDepartment = createAction(
  '[Department List Component] Delete Department',
  props<{ id: string }>()
);

export const deleteDepartmentSuccess = createAction(
  '[Department Delete Effect] Delete Department Success',
  props<{ id: string }>()
);

export const deleteDepartmentFailure = createAction(
  '[Department Delete Effect] Delete Department Failure',
  props<{ error: any }>()
);

 
 import * as departmentsReducer from './department.reducer' 
import * as addDepartmentReducer from '../add-department/add-department.reducer'
import { createFeatureSelector, createSelector } from '@ngrx/store';


export interface DepartmentsModuleState {
  departments: departmentsReducer.DepartmentState,
  addDepartment: addDepartmentReducer.State
 
}

export interface State {
  departmentsModule: DepartmentsModuleState;
}

export const rootReducers = {
  departments: departmentsReducer.reducer,
  addDepartment:addDepartmentReducer.addDepReducer,
};

export const selectDepartmentsModuleState =
  createFeatureSelector<DepartmentsModuleState>(departmentsReducer.departmentsFeatureKey);

export const selectDepartmentsState = createSelector(
  selectDepartmentsModuleState,
  (state: DepartmentsModuleState) => state.departments.departments
);

export const selectAddDepartmentState = createSelector(
  selectDepartmentsModuleState,
  (state: DepartmentsModuleState) => state.addDepartment
);
 
import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as DepartmentActions from './department.actions';
 import { Department } from '../department.model';

export const departmentsFeatureKey = 'departments';

export interface DepartmentState extends EntityState<Department> {
  // additional entities state properties
  error: any;
  selectedDepartment?: Department;
}
 
export const adapter: EntityAdapter<Department> = createEntityAdapter<Department>();

export const initialState: DepartmentState = adapter.getInitialState({
  // additional entity state properties
  error: undefined,
  selectedDepartment: undefined,
});

export const reducer = createReducer(
  initialState,

  // Add Department
  on(DepartmentActions.addDepartmentSuccess, (state, action) =>
    adapter.addOne(action.department, state)
  ),
  on(DepartmentActions.addDepartmentFailure, (state, action) => {
    return { ...state, error: action.error };
  }),

  // Get All Departments
  on(DepartmentActions.loadDepartmentsSuccess, (state, action) =>
    adapter.addMany(action.departments, state)
  ),
  on(DepartmentActions.loadDepartmentsFailure, (state, action) => {
    return { ...state, error: action.error };
  }),

  // Get One Department
  on(DepartmentActions.loadDepartmentSuccess, (state, action) => {
    return { ...state, selectedDepartment: action.selectedDepartment };
  }),
  on(DepartmentActions.loadDepartmentFailure, (state, action) => {
    return { ...state, error: action.error };
  }),

  // Update One Department
  on(DepartmentActions.updateDepartment, (state, action) =>
    adapter.updateOne(action.department, state)
  ),

  // Delete One Department
  on(DepartmentActions.deleteDepartmentSuccess, (state, action) =>
    adapter.removeOne(action.id, state)
  ),
  on(DepartmentActions.deleteDepartmentFailure, (state, action) => {
    return { ...state, error: action.error };
  })
);

export const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();

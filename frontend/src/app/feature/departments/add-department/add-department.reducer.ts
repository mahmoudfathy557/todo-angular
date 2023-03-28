import { selectedDepartment } from './../store/department.selectors';
import {
  Action,
  combineReducers,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import {
  box,
  Boxed,
  createFormGroupState,
  createFormStateReducerWithUpdate,
  disable,
  enable,
  FormGroupState,
  formStateReducer,
  setValue,
  SetValueAction,
  updateGroup,
  validate,
} from 'ngrx-forms';
import {
  equalTo,
  minLength,
  required,
  requiredTrue,
} from 'ngrx-forms/validation';
import { Department } from '../department.model';
import { selectDepartmentsFeature } from '../store/department.selectors';
import { DepartmentState } from '../store/department.reducer';

export const addDepartmentFeatureKey = 'ngForm';

export interface FormValue extends Department {
  name: string;
  manager: string;
  emps_no: number;
}

export interface State {
  error: any;
  ngForm: {
    formState: FormGroupState<FormValue>;
    submittedValue: FormValue | undefined;
  };
}

export class SetSubmittedValueAction implements Action {
  static readonly TYPE = 'ngForm/SET_SUBMITTED_VALUE';
  readonly type = SetSubmittedValueAction.TYPE;
  constructor(public submittedValue: FormValue) {}
}

export const FORM_ID = 'ngForm';

export const INITIAL_STATE = createFormGroupState<FormValue>(FORM_ID, {
  name: '',
  manager: '',
  emps_no: 9,
});

const validateAndUpdateFormState = updateGroup<FormValue>({
  name: validate(required),
  manager: validate(required),
  emps_no: validate(required),
});

const validationFormGroupReducer = createFormStateReducerWithUpdate<FormValue>(
  validateAndUpdateFormState
);

const reducers = combineReducers<State['ngForm'], any>({
  formState(s = INITIAL_STATE, a: Action | any) {
    switch (a.type) {
      case '[Department Effect] Load Department Success':
        return formStateReducer(
          INITIAL_STATE,
          new SetValueAction(INITIAL_STATE.id, { ...a.selectedDepartment })
        );
      case '[Department Effect] Load Department Failure':
        return { ...s, error: a.error };
      default: {
        return validationFormGroupReducer(s, a);
      }
    }
  },
  submittedValue(s: FormValue | undefined, a: SetSubmittedValueAction) {
    switch (a.type) {
      case SetSubmittedValueAction.TYPE:
        return a.submittedValue;

      default:
        return s;
    }
  },
});

export function addDepReducer(s: State['ngForm'], a: Action) {
  return reducers(s, a);
}

// export const selectAddDepartmentFeature = createFeatureSelector<State>(
//   addDepartmentFeatureKey
// );

// export const selectedDepartment = createSelector(
//   selectDepartmentsFeature,
//   selectAddDepartmentFeature,
//   (depState: DepartmentState, addDepState: State) => {
//     addDepState.ngForm.formState = {
//       ...addDepState.ngForm.formState,
//     };
//   }
// );

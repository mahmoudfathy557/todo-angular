import { Department } from './../department.model';
import { Action, combineReducers } from '@ngrx/store';
import {
  box,
  Boxed,
  createFormGroupState,
  createFormStateReducerWithUpdate,
  disable,
  enable,
  FormGroupState,
  updateGroup,
  validate,
} from 'ngrx-forms';
import {
  equalTo,
  minLength,
  required,
  requiredTrue,
} from 'ngrx-forms/validation';

 
 
export interface FormValue extends Department {
 
}

export interface State  {
  depForm: {
    formState: FormGroupState<FormValue>;
    submittedValue: FormValue | undefined;
  };
}

export class SetSubmittedValueAction implements Action {
  static readonly TYPE = 'depForm/SET_SUBMITTED_VALUE';
  readonly type = SetSubmittedValueAction.TYPE;
  constructor(public submittedValue: FormValue) {}
}

export const FORM_ID = 'depForm';

export const INITIAL_STATE = createFormGroupState<FormValue>(FORM_ID, {
  name: '',
  manager: '',
  emps_no: 9,
});

const validationFormGroupReducer = createFormStateReducerWithUpdate<FormValue>(
  updateGroup<FormValue>({
    name: validate(required),
    manager: validate(required),
    emps_no: validate(required),
  })
);

export const addDepReducer = combineReducers<State['depForm'], any>({
  formState(s = INITIAL_STATE, a: Action) {
    return validationFormGroupReducer(s, a);
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

export function reducer(s: State['depForm'], a: Action) {
  return addDepReducer(s, a);
}

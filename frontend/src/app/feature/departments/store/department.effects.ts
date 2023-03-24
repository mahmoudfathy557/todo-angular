import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import {
  EMPTY,
  catchError,
  concatMap,
  exhaustMap,
  map,
  mergeMap,
  of,
  tap,
} from 'rxjs';
import {
  addDepartment,
  addDepartmentFailure,
  loadDepartments,
  loadDepartmentsFailure,
  loadDepartmentsSuccess,
  addDepartmentSuccess,
  loadDepartment,
  loadDepartmentSuccess,
  loadDepartmentFailure,
  updateDepartment,
  deleteDepartment,
  deleteDepartmentSuccess,
  deleteDepartmentFailure,
  updateDepartmentSuccess,
  updateDepartmentFailure,
} from './department.actions';
import { Router } from '@angular/router';
import { GraphQLService } from '../graphql.service';
import {
  ADD_DEPARTMENT,
  GET_DEPARTMENT,
  GET_DEPARTMENTS,
  REMOVE_DEPARTMENT,
  UPDATE_DEPARTMENT,
} from '../graphql-queries';

@Injectable()
export class DepartmentEffects {
  // Add new Department
  createDepartment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addDepartment),
      exhaustMap((action) =>
        this.graphql
          .fetch(ADD_DEPARTMENT, { newDepartmentData: action.department })
          .pipe(
            map((res: any) =>
              addDepartmentSuccess({ department: res.data.addDepartment })
            ),
            catchError((error) => {
              return of(addDepartmentFailure({ error }));
            })
          )
      ),
      tap(() => {
        // this.router.navigate(['/Department/list']), console.log('success');
      })
    )
  );

  // Get all Departments
  loadDepartments$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadDepartments),
      exhaustMap((action) =>
        this.graphql.fetch(GET_DEPARTMENTS).pipe(
          map((res: any) =>
            loadDepartmentsSuccess({ departments: res?.data.departments })
          ),
          catchError((error) => of(loadDepartmentsFailure({ error })))
        )
      )
    )
  );

  // Get One Departments
  loadDepartment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadDepartment),
      exhaustMap((action) =>
        this.graphql.fetch(GET_DEPARTMENT, { departmentId: action.id }).pipe(
          map((res: any) =>
            loadDepartmentSuccess({ selectedDepartment: res.data.department })
          ),
          catchError((error) => of(loadDepartmentFailure({ error })))
        )
      )
    )
  );

  // Update one Department
  updateDepartment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateDepartment),
      concatMap((action) =>
        this.graphql
          .fetch(UPDATE_DEPARTMENT, {
            updateDepartmentId: action.department.id,
            updatedDepartmentData: action.department.changes,
          })
          .pipe(
            map(() => updateDepartmentSuccess()),
            catchError((error) => of(updateDepartmentFailure({ error })))
          )
      )
    )
  );

  deleteDepartment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteDepartment),
      mergeMap((action) =>
        this.graphql
          .fetch(REMOVE_DEPARTMENT, { removeDepartmentId: action.id })
          .pipe(
            map(() => deleteDepartmentSuccess({ id: action.id })),
            catchError((error) => of(deleteDepartmentFailure({ error })))
          )
      )
      // tap(() => this.router.navigate(['/Department/list'])) // Not in Video 12
    )
  );

  constructor(
    private actions$: Actions,
    readonly graphql: GraphQLService,
    private router: Router
  ) {}
}

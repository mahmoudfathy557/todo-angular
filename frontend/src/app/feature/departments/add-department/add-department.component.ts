import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Department } from '../department.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Message, MessageService } from 'primeng/api';
import {
  ADD_DEPARTMENT,
  GET_DEPARTMENTS,
  UPDATE_DEPARTMENT,
} from '../graphql-queries';
import { Apollo } from 'apollo-angular';
import { DepartmentState } from '../store/department.reducer';
import {  Store, select } from '@ngrx/store';
import {
  addDepartment,
  loadDepartment,
  updateDepartment,
} from '../store/department.actions';
import { selectError, selectedDepartment } from '../store/department.selectors';
import { Update } from '@ngrx/entity';
import { Observable, Subscription, catchError, filter, map, take } from 'rxjs';
import {
  FormValue,
  INITIAL_STATE,
  SetSubmittedValueAction,
  State,
} from './add-department.reducer';
import { FormGroupState, ResetAction, SetValueAction } from 'ngrx-forms';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css'],
  providers: [MessageService],
})
export class AddDepartmentComponent implements OnInit, OnDestroy {
  formState$: Observable<FormGroupState<FormValue>>;
  submittedValue$: Observable<FormValue | undefined>;

  registrationForm: FormGroup;
  depId: string;
  editedDep?: Department;
  msgs: Message[] = [];
  subscription: Subscription | undefined;
  error: Observable<any>;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private store: Store<State>,
    private depStore: Store<DepartmentState>
  ) {
    this.formState$ = store.pipe(select((s) => s.ngForm.formState));
    this.submittedValue$ = store.pipe(select((s) => s.ngForm.submittedValue));
  }

  ngOnInit(): void {
    const depId = this.route.snapshot.paramMap.get('id');

    if (depId) {
      this.depId = depId;
      this.store.dispatch(loadDepartment({ id: depId }));
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
      
    }
    this.store.dispatch(
      new SetValueAction(INITIAL_STATE.id, INITIAL_STATE.value)
    );

    this.store.dispatch(new ResetAction(INITIAL_STATE.id));
  }

  submit() {
    // edit emp
    if (this.depId) {
      this.subscription = this.formState$
        .pipe(
          take(1),
          filter((s) => s.isValid),
          map((fs) => {
            const changes = { ...fs.value };
            delete changes['id'];

            const updatedProduct: Update<Department> = {
              id: this.depId,
              changes: changes,
            };

            this.store.dispatch(
              updateDepartment({ department: updatedProduct })
            );

            this.depStore.pipe(select(selectError)).subscribe((res) => {
              if (res) {
                this.showViaService('error', res);
              } else {
                this.showViaService(
                  'success',
                  'Department is updated Successfully'
                );
              }
            });
          })
        )
        .subscribe();
    }
    //  add emp
    else {
      this.subscription = this.formState$
        .pipe(
          take(1),
          filter((s) => s.isValid),
          map((fs) => {
            this.store.dispatch(addDepartment({ department: fs.value }));

            this.depStore.pipe(select(selectError)).subscribe((res) => {
              if (res) {
                this.showViaService('error', res);
              } else {
                this.showViaService('success', 'New Department is added');
              }
            });
          })
        )
        .subscribe();
    }
  }

  showViaService(type: string, msg: string) {
    if (type === 'success') {
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: msg,
      });
      setTimeout(() => {
        this.router.navigate(['departments']);
      }, 3000);
    } else {
      return this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: msg,
      });
    }
  }
}

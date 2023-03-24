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
import { Store, select } from '@ngrx/store';
import {
  addDepartment,
  loadDepartment,
  updateDepartment,
} from '../store/department.actions';
import { selectedDepartment } from '../store/department.selectors';
import { Update } from '@ngrx/entity';
import { Subscribable, Subscription } from 'rxjs';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css'],
  providers: [MessageService],
})
export class AddDepartmentComponent implements OnInit, OnDestroy {
  registrationForm: FormGroup;
  depId: string;
  editedDep?: Department;
  msgs: Message[] = [];
  subscription:Subscription
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private apollo: Apollo,
    private store: Store<DepartmentState>
  ) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(1)]],
      manager: ['', [Validators.required, Validators.minLength(3)]],
      emps_no: [0, [Validators.required]],
    });

    const depId = this.route.snapshot.paramMap.get('id');
    //edit emp
    if (depId) {
      this.depId = depId;
      this.store.dispatch(loadDepartment({ id: depId }))
      this.store.pipe(select(selectedDepartment)).subscribe((dep) => {
        this.registrationForm.patchValue(dep ? dep : {});
      });
    }
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe()
  }

  get name() {
    return this.registrationForm.get('name');
  }

  get manager() {
    return this.registrationForm.get('manager');
  }

  get emps_no() {
    return this.registrationForm.get('emps_no');
  }

  onSubmit() {

    console.log('on submit');
    // edit emp
    if (this.depId) {
     
      const updatedProduct: Update<Department> = {
        id: this.depId,
        changes: this.registrationForm.value,
      };
      
      // const updatedDep = { ...this.registrationForm.value } as Department;
      this.store.dispatch(updateDepartment({ department: updatedProduct }));
    this.subscription=  this.store.subscribe((state) => {
        console.log(state);
        if (state.error) {
          this.showViaService('error', state.error.message);
        } else {
          this.showViaService('success', 'Department is updated Successfully');
        }
      });
    }
    //  add emp
    else {
      console.log('add submit');

      const newDep = this.registrationForm.value as Department;
      this.store.dispatch(addDepartment({ department: newDep }));
    this.subscription = this.store.subscribe((state) => {
      console.log(state);
      if (state.error) {
        this.showViaService('error', state.error.message);
      } else {
        this.showViaService('success', 'New Department is added');
      }
    });
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

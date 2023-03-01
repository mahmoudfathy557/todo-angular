import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Department } from '../department';
 import { ActivatedRoute, Router } from '@angular/router';
import { Message, MessageService } from 'primeng/api';
import {
  ADD_DEPARTMENT,
  GET_DEPARTMENTS,
  UPDATE_DEPARTMENT,
} from '../graphql-queries';
import { Apollo } from 'apollo-angular';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css'],
  providers: [MessageService],
})
export class AddDepartmentComponent implements OnInit {
  registrationForm: FormGroup;
  urlId: string;
  editedDep?: Department;
  msgs: Message[] = [];

  constructor(
    private fb: FormBuilder,
     private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private apollo: Apollo
  ) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(1)]],
      manager: ['', [Validators.required, Validators.minLength(3)]],
      emps_no: [, [Validators.required]],
    });

    const urlId = this.route.snapshot.paramMap.get('id');
    //edit emp
    if (urlId) {
      this.urlId = urlId;
      this.apollo
        .watchQuery<any>({
          query: GET_DEPARTMENTS,
        })
        .valueChanges.subscribe(({ data, loading }) => {
          const editedDep = data.departments.find(
            (e: any) => String(e.id) === String(urlId)
          );
          this.registrationForm.patchValue(editedDep ? editedDep : {});
        });
    }
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
    // edit emp

    if (this.urlId) {
      const updatedDep = { ...this.registrationForm.value } as Department;
      this.apollo
        .mutate({
          mutation: UPDATE_DEPARTMENT,
          variables: {
            updateDepartmentId: this.urlId,
            updatedDepartmentData: updatedDep,
          },
          refetchQueries: [{ query: GET_DEPARTMENTS }],
        })

        .subscribe({
          next: (v) => console.log(v),
          error: (e) => {
            console.log(e);
            this.showViaService('error', e.message);
          },
          complete: () =>
            this.showViaService(
              'success',
              '  Department is updated Successfully'
            ),
        });
    }
    //  add emp
    else {
      const newDep = this.registrationForm.value as Department;
      this.apollo
        .mutate({
          mutation: ADD_DEPARTMENT,
          variables: {
            newDepartmentData: newDep,
          },
          refetchQueries: [{ query: GET_DEPARTMENTS }],
        })

        .subscribe({
          next: (v) => console.log(v),
          error: (e) => {
            console.log(e);
            this.showViaService('error', e.message);
          },
          complete: () =>
            this.showViaService('success', 'New Department is added'),
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

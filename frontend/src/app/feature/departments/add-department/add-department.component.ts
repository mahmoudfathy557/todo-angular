import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Department } from '../department';
import { DepartmentService } from '../departments.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Message, MessageService } from 'primeng/api';

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
    private depService: DepartmentService,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService
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
      this.depService.getDeps().subscribe({
        next: (deps) => {
          const editedDep = deps.find((e) => String(e.id) === String(urlId));

          this.registrationForm.patchValue(editedDep ? editedDep : {});
        },
        error: (error) => {
          error.message;
          console.error(error);
        },
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
      const updatedDep = { ...this.registrationForm.value, id: this.urlId };
      this.depService.updateDep(updatedDep).subscribe({
        next: (v) => console.log(v),
        error: (e) => this.showViaService('error', e.message),
        complete: () => {
          this.showViaService('success', '  Department is Edited');
        },
      });
    }
    //  add emp
    else {
      const newDep = this.registrationForm.value;

      this.depService.addDep(newDep).subscribe({
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

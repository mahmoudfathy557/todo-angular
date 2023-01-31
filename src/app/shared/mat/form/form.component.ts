import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Employee } from 'src/app/feature/employee/Employee';
import { EmployeeService } from 'src/app/feature/employee/employee.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Input() addEmp: (args: any) => void
  @Input() editEmp: (args: any) => void
  registrationForm: FormGroup;
  urlId: string
  editedEmp?: Employee



  constructor(private fb: FormBuilder, private empService: EmployeeService, private router: Router, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({

      id: [''],
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.minLength(3)]],
      age: [0, [Validators.required]],
      hiredAt: ['', [Validators.required]],
    });

    const urlId = this.route.snapshot.paramMap.get('id');
    //edit emp
    if (urlId) {
      this.urlId = (urlId)
      this.empService.getEmployees()
        .subscribe({
          next: employees => {

            const editedEmp = employees.find(e => Number(e.id) === Number(urlId))
            // console.log(editedEmp);
            this.registrationForm.patchValue(editedEmp ? editedEmp : {});
          },
          error: error => {
            error.message
            console.error(error);

          }
        })
    }



  }

  get firstName() {
    return this.registrationForm.get('firstName');
  }

  get lastName() {
    return this.registrationForm.get('lastName');
  }

  get age() {
    return this.registrationForm.get('age');
  }

  get hiredAt() {
    return this.registrationForm.get('hiredAt');
  }

  get email() {
    return this.registrationForm.get('email');
  }

  onSubmit() {
    // edit emp
    if (this.urlId) {
      this.editEmp(this.registrationForm.value)
    } else {
      //  add emp
      this.addEmp(this.registrationForm.value)
    }
  }
}

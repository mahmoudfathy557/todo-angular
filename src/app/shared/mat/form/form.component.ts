import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { EmployeeService } from 'src/app/feature/employee/employee.service';
 

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  registrationForm: FormGroup;
  @Input() addEmp: (args: any) => void


  constructor(private fb: FormBuilder,private empService:EmployeeService) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.minLength(3)]],
      age: [0, [Validators.required]],
      hiredAt: ['', [Validators.required]],
    });
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
    this.addEmp(this.registrationForm.value)
  }
}

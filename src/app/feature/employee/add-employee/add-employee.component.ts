import { Employee } from 'src/app/feature/employee/Employee';
import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  constructor(private empService: EmployeeService) { }

  addEmp(emp: Employee) {
    console.log(emp);
    emp.id = Math.floor(Math.random() * 100) + 3
    this.empService.addEmp(emp).subscribe(
      response => console.log('Success!', response),
      error => console.error('Error!', error)
    );



  }
}

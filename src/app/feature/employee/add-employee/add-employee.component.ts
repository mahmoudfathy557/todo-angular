import { Employee } from 'src/app/feature/employee/Employee';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  emp$: Observable<Employee[]>;
  selectedId: number;
  employees: Employee

  constructor(private empService: EmployeeService, private router: Router, private route: ActivatedRoute) { }


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.route.paramMap.pipe(
      switchMap(params => {
        console.log(params);
        // this.selectedId = Number(params.get('id'));
        // console.log(this.selectedId);
        return this.empService.getEmployees()
      })
    );
  }


  addEmp(emp: Employee) {

    emp.id = Math.floor(Math.random() * 100) + 3
    this.empService.addEmp(emp).subscribe(
      response => console.log('Success!', response),
      error => console.error('Error!', error)
    );
  }

  editEmp(emp: Employee) {

    this.empService.updateEmp(emp).subscribe(emp => console.log(emp))

  }
}

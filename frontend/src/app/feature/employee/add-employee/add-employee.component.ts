import { Employee } from 'src/app/feature/employee/Employee';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  emp$: Observable<Employee[]>;
  urlId: string;
  employees: Employee;

  constructor(
    private empService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const urlId = this.route.snapshot.paramMap.get('id');
    if (urlId) {
      this.urlId = urlId;
    }

    this.empService.getEmployees();
  }

  addEmp(emp: Employee) {
    this.empService.addEmp(emp).subscribe(
      (response) => {
        console.log('Success!', response);
        this.router.navigate(['employees']);
      },
      (error) => {
        console.error('Error!', error);
        alert(error.message);
      }
    );
  }

  editEmp(emp: Employee) {
    console.log(emp);
    emp._id = this.urlId;

    this.empService.updateEmp(emp).subscribe(
      (response) => {
        console.log('Success!', response);
        this.router.navigate(['employees']);
      },
      (error) => {
        console.error('Error!', error);
        alert(error.message);
      }
    );
  }
}

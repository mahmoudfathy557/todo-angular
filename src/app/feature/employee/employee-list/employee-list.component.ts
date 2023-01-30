import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../Employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private empService:EmployeeService){}
  employees:Employee[]
  errorMessage:string


  getEmps():void{
    this.empService.getEmployees()
      .subscribe({
        next: employees => {
          console.log(employees);
          this.employees = employees
        },
        error: error => {
          this.errorMessage = error.message
          console.error(error);

        }
      })
  }


  ngOnInit(): void {
     
    this.getEmps();
   

  }

  // we use arrow fun here to make 'this' point to class 'EmployeeListComponent' => (lifting)

 deleteEmp=(emp:Employee):void=>{
   this.empService.deleteEmp(emp)
     .subscribe(() => this.employees = this.employees.filter(t => t.id !== emp.id));
  //  this.employees =  this.employees.filter(e=>e.id !== emp.id)
    
   
  }
  
  

  


}

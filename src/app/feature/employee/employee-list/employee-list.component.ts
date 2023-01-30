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
<<<<<<< HEAD
          console.log(employees);
=======
>>>>>>> c225999c3ff96ed89bab26d84f33e3a7628ee015
          this.employees = employees
        },
        error: error => {
          this.errorMessage = error.message
          console.error(error);

        }
      })
  }


  ngOnInit(): void {
<<<<<<< HEAD
     
=======

>>>>>>> c225999c3ff96ed89bab26d84f33e3a7628ee015
    this.getEmps();
   

  }

  // we use arrow fun here to make 'this' point to class 'EmployeeListComponent' => (lifting)

 deleteEmp=(emp:Employee):void=>{
<<<<<<< HEAD
   this.empService.deleteEmp(emp)
     .subscribe(() => this.employees = this.employees.filter(t => t.id !== emp.id));
  //  this.employees =  this.employees.filter(e=>e.id !== emp.id)
=======
  
   this.employees =  this.employees.filter(e=>e.id !== emp.id)
>>>>>>> c225999c3ff96ed89bab26d84f33e3a7628ee015
    
   
  }
  
  

  


}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, Subject, of } from 'rxjs';
import { Employee } from './Employee';
import { Employees } from 'src/app/mock-employees';

const httpOptions = {
 headers: new HttpHeaders({
  'Content-Type': 'application/json'
 })
}

@Injectable({
 providedIn: 'root'
})
export class EmployeeService {


 // private editedTask: Task
 private subject = new Subject<any>()  // observer to receive any update when listening





 constructor(private http: HttpClient) { }

  

 // Async call  from a file  

 // of()=>Returns an Observable instance that synchronously delivers the values provided as arguments.
 getEmployees(): Observable<Employee[]> {
  const employees = of(Employees)
  return employees
 }

 // editTask(mployee: Employee): void {
 //  this.editedTask = task
 //  this.subject.next(this.editedTask)

 // }

 onEditedEmployee(): Observable<any> {
  return this.subject.asObservable()
 }


}

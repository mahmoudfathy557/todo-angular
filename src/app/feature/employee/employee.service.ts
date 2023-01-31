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

<<<<<<< HEAD
 private apiUrl = 'http://localhost:5000/employees'


=======
>>>>>>> c225999c3ff96ed89bab26d84f33e3a7628ee015

 // private editedTask: Task
 private subject = new Subject<any>()  // observer to receive any update when listening





 constructor(private http: HttpClient) { }

  

 // Async call  from a file  

 // of()=>Returns an Observable instance that synchronously delivers the values provided as arguments.
<<<<<<< HEAD
 // getEmployees(): Observable<Employee[]> {
 //  const employees = of(Employees)
 //  return employees
 // }


 getEmployees(): Observable<Employee[]> {
  return this.http.get<Employee[]>(this.apiUrl)
 }


 deleteEmp(emp: Employee): Observable<Employee> {
  const url = `${this.apiUrl}/${emp.id}`
  return this.http.delete<Employee>(url)
 }

 addEmp(emp: Employee): Observable<Employee> {
  console.log(emp);
  return this.http.post<Employee>(this.apiUrl, emp, httpOptions)
=======
 getEmployees(): Observable<Employee[]> {
  const employees = of(Employees)
  return employees
>>>>>>> c225999c3ff96ed89bab26d84f33e3a7628ee015
 }

 
 updateEmp(emp: Employee): Observable<Employee> {
  const url = `${this.apiUrl}/${emp.id}`
  return this.http.put<Employee>(url, emp, httpOptions)
 }

}

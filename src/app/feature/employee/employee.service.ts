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


  private apiUrl = 'http://localhost:5000/employees'


  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl)
  }


  deleteEmp(emp: Employee): Observable<Employee> {
    const url = `${this.apiUrl}/${emp.id}`
    return this.http.delete<Employee>(url)
  }

  addEmp(emp: Employee): Observable<Employee> {
   
    return this.http.post<Employee>(this.apiUrl, emp, httpOptions)

  }




  updateEmp(emp: Employee): Observable<Employee> {
    const url = `${this.apiUrl}/${emp.id}`
    return this.http.put<Employee>(url, emp, httpOptions)
  }

}

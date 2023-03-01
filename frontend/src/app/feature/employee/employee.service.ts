import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, of } from 'rxjs';
import { Employee } from './Employee';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private apiUrl = 'http://localhost:3000/api/v1/emps';

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl);
  }

  deleteEmp(emp: Employee): Observable<Employee> {
    const url = `${this.apiUrl}/${emp._id}`;
    return this.http.delete<Employee>(url);
  }

  addEmp(emp: Employee): Observable<Employee> {
    console.log(emp);
    return this.http.post<Employee>(this.apiUrl, emp, httpOptions);
  }

  updateEmp(emp: Employee): Observable<Employee> {
    const url = `${this.apiUrl}/${emp._id}`;
    return this.http.put<Employee>(url, emp, httpOptions);
  }
}

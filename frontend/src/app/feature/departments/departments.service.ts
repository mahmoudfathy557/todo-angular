import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, of } from 'rxjs';
import { Department } from './department';
  
const httpOptions = {
 headers: new HttpHeaders({
  'Content-Type': 'application/json',
  

 }),
};

@Injectable({
 providedIn: 'root',
})
export class DepartmentService {
 private apiUrl = 'http://localhost:5000/departments'
 // private apiUrl = 'http://localhost:3000/api/v1/deps';

 constructor(private http: HttpClient) { }

 getDeps(): Observable<Department[]> {
  return this.http.get<Department[]>(this.apiUrl);
 }

 deleteDep(dep: Department): Observable<Department> {
  const url = `${this.apiUrl}/${dep.id}`;
  return this.http.delete<Department>(url);
 }

 addDep(dep: Department): Observable<Department> {
  return this.http.post<Department>(this.apiUrl, dep, httpOptions);
 }

 updateDep(dep: Department): Observable<Department> {
  const url = `${this.apiUrl}/${dep.id}`;
  return this.http.put<Department>(url, dep, httpOptions);
 }
}

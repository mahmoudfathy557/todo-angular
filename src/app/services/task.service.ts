import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, Subject, of } from 'rxjs';
import { TASKS } from '../mock-tasks'
import { Task } from '../Task';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {


  private editedTask:Task
  private subject = new Subject<any>()  // observer to receive any update when listening

 



  constructor(private http: HttpClient) { }

  // Sync call

  // getTasks(): Task[] {
  //   return TASKS
  // }

  // Async call  from a file  

  // of()=>Returns an Observable instance that synchronously delivers the values provided as arguments.
  getTasks(): Observable<Task[]> {
        const tasks = of(TASKS)
    return tasks
  }

  editTask(task:Task):void{
    this.editedTask =task
    this.subject.next(this.editedTask)

  }

  onEditedTask(): Observable<any> {
    return this.subject.asObservable()
  }

 
}

import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTask: boolean = false
  private showEditTask: boolean = false
  private subject = new Subject<any>()  // observer to receive any update when listening

  constructor() { }

  toggleAddTask(arg:any): void {
 
    console.log(arg);
 
      this.showAddTask = !this.showAddTask
    if (arg.showEditTask){
      this.subject.next({type:'edit',value:this.showAddTask})

    }else{
      this.subject.next({ type: 'add', value: this.showAddTask })

    }
    // this.subject.next(this.showAddTask)
  }

 



  onToggle(): Observable<any> {
    return this.subject.asObservable()
  }

}

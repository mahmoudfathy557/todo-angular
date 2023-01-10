import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { UiService } from './../../services/ui.service';
import { Subscription } from 'rxjs';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  emp: Task = {
    firstName: '',
    lastName: '',
    age: 0,
    email: '',
    hiredAt: '',
  };

  @Output() onSubmitTask: EventEmitter<{newTask:Task,op:string}> = new EventEmitter();

  showAddTask: boolean = false;
  showEditTask: boolean = false;
  subscription: Subscription;
  tasksLength: number;

  constructor(private uiService: UiService, private taskService: TaskService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => {

      if (value.type === 'add') {
        this.showAddTask = value.value;
        this.showEditTask = false;
      } else {
        this.showEditTask = value.value;
        this.showAddTask = false;
      }

      return;
    });

    this.taskService.onEditedTask().subscribe((value) => {
      this.emp = { ...value };
    });
  }
  ngOnInit(): void {
    this.taskService.getTasks().subscribe((value) => {
      this.tasksLength = value.length;
    });
  }

  onSubmit() {
  if (!this.emp.firstName) {
      alert('please add task!');
      return;
    }

    // add new task
    if(this.showAddTask){
      const newTask: Task = {
        id: this.tasksLength + 1,
        firstName: this.emp.firstName,
        lastName: this.emp.lastName,
        age: this.emp.age,
        email: this.emp.email,
        hiredAt: this.emp.hiredAt,
      };

      

      this.onSubmitTask.emit({newTask,op:'add'});

      this.emp.firstName = '';
      this.emp.lastName = '';
      this.emp.age = 0;
      this.emp.email = '';
      this.emp.hiredAt = '';
    }
    // edit existed task
    else{
      this.onSubmitTask.emit({ newTask:this.emp, op: 'edit' });

    }

  
    
  

  }
}

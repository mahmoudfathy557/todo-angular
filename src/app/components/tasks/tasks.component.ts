import { Component, OnInit } from '@angular/core';

import { Task } from '../..//Task';
import { TaskService } from 'src/app/services/task.service';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks: Task[] = []
  errorMessage: string


  constructor(private router: Router, private route: ActivatedRoute, private taskService: TaskService, private uiService: UiService
  ) {


  }


  // Async (observable)
  getTasks(): void {
    this.taskService.getTasks()
      .subscribe({
        next: tasks => {
          this.tasks = tasks
        },
        error: error => {
          this.errorMessage = error.message
          console.error(error);

        }
      })
  }

  // useEffect :)
  ngOnInit(): void {

    this.getTasks();
  }

  handleDeleteBtn(task: Task) {
    console.log(task);
    this.tasks = this.tasks.filter(t => t.id !== task.id);

  }

  handleUpdateBtn(task: Task) {

    this.taskService.editTask(task)

  }

  handleAddNewTask(task: Task) {
    this.tasks.push(task)

  }

  handleEditTask(task: Task) {
     let newTasks=[...this.tasks]
    newTasks = newTasks.filter(t=>t.id !==task.id)
    
    newTasks.push(task)
    this.tasks=newTasks
  }

  handleSubmitTask(task: any) {
    if (task.op === 'add') {
      this.handleAddNewTask(task.newTask)
    } else if (task.op === 'edit') {
      this.handleEditTask(task.newTask)

    }


  }



}

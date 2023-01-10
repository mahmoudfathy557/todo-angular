import { UiService } from 'src/app/services/ui.service';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() task: Task //prop as in react coming from parent 'tasksComp'
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter()
  @Output() onUpdateTask: EventEmitter<Task> = new EventEmitter()
  @Output() onReminderTask: EventEmitter<Task> = new EventEmitter()
  faTrash = faTrash;

  constructor(private router: Router, private route: ActivatedRoute,
    private uiService:UiService
    ) { }

  onDelete(task: Task | undefined) {
    this.onDeleteTask.emit(task)
  }

  onUpdate(task: Task | undefined) {

    this.uiService.toggleAddTask({showEditTask:true})
    this.onUpdateTask.emit(task)
  }

  onToggleReminder(task: Task | undefined) {
    this.onReminderTask.emit(task)
  }

  onSelect(task: Task) {
    // this.router.navigate(['task-details',task.id]) // static route
    this.router.navigate([task.id], { relativeTo: this.route })
  }


}

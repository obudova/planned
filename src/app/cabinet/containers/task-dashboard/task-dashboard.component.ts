import {Component, OnInit} from '@angular/core';
import { TaskService } from '../../../../services/task.service';

@Component({
  selector: 'task-dashboard',
  template: ` Hello, i'm task dashboard`,
  styles: ['']
})
export class TaskDashboardComponent implements OnInit {
  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit() {
    this.taskService.listPersonalTasks()
      .subscribe((res) => {
        console.log(res);
      })
  }
}

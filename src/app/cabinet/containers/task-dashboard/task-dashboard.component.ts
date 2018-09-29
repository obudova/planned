import {Component, OnInit} from '@angular/core';
import { TaskService } from '../../../../services/task.service';

@Component({
  selector: 'task-dashboard',
  templateUrl: './task-dashboard.component.html',
  styleUrls: ['./task-dashboard.component.scss']
})
export class TaskDashboardComponent implements OnInit {
  projects: any[];
  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit() {
    this.taskService.listPersonalTasks()
      .subscribe((res) => {
        console.log(res);
      })
    this.taskService.listProjects()
      .subscribe((res) => {
        this.projects =res;
        console.log(this.projects);
      })
  }
}

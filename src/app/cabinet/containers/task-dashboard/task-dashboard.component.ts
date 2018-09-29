import {Component, OnInit} from '@angular/core';
import { TaskService } from '../../../../services/task.service';
import * as moment from 'moment';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'task-dashboard',
  templateUrl: './task-dashboard.component.html',
  styleUrls: ['./task-dashboard.component.scss']
})
export class TaskDashboardComponent implements OnInit {
  projects: any[];
  tasks: any[];
  tasksForToday: any[];
  tasksForTommorrow: any[];
  leftTasks: any[];
  today = moment();
  filterForm: FormGroup;
  constructor(
    private taskService: TaskService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.taskService.listProjects()
      .subscribe((res) => {
        this.projects = res;
      });
    this.listAll();
    this.initForm();
  }

  listAll() {
    this.taskService.listAllTasks()
      .subscribe((res) => {
        this.tasks = res;
        this.processTasks();
      });
  }

  listPersonal() {
    this.taskService.listPersonalTasks()
      .subscribe((res) => {
        this.tasks = res;
        this.processTasks();
      });
  }

  listProjectTasks() {
    this.taskService.listProjectTasks()
      .subscribe((res) => {
        this.tasks = res;
        this.processTasks();
      });
  }

  initForm() {
    this.filterForm = this.fb.group({
      filter: this.fb.control('all')
    });

    this.filterForm.get('filter').valueChanges
      .subscribe((value) => {
       switch (value) {
         case 'personal': {
           this.listPersonal();
           break;
         }
         case 'all': {
           this.listAll();
           break;
         }
         case 'project': {
           this.taskService.listProjectTasks()
             .subscribe((res) => {
               this.tasks = res;
               this.processTasks();
             });
         }
       }
      });
  }
  processTasks() {
    this.tasksForToday = this.tasks.filter(task => moment(task.due_date).dayOfYear() === this.today.dayOfYear());
    const tomorrow = this.today.clone().add(1, 'day');
    this.tasksForTommorrow = this.tasks.filter(task => moment(task.due_date).dayOfYear() === tomorrow.clone().dayOfYear());
    this.leftTasks = this.tasks.filter(task => moment(task.due_date).valueOf() > tomorrow.clone().endOf('day').valueOf());
  }
}

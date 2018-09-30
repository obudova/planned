import {Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {TaskService} from '../../../../services/task.service';
import * as moment from 'moment';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {TaskFormComponent} from '../../components/task-form/task-form.component';

@Component({
    selector: 'task-dashboard',
    templateUrl: './task-dashboard.component.html',
    styleUrls: ['./task-dashboard.component.scss']
})
export class TaskDashboardComponent implements OnInit, OnChanges {
    projects: any[];
    tasks: any[];
    tasksForToday: any[];
    tasksForTommorrow: any[];
    leftTasks: any[];
    today = moment();
    filterForm: FormGroup;
    @Input()
    searchQuery: string;

    constructor(
        private taskService: TaskService,
        private dialog: MatDialog,
        private fb: FormBuilder
    ) {
    }

    ngOnInit() {
        this.taskService.listProjects()
            .subscribe((res) => {
                this.projects = res;
            });
        this.listAll();
        this.initForm();
    }

    openCreateTaskModal() {
        const dialogRef = this.dialog.open(TaskFormComponent, {
            width: '250px'
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            // this.animal = result;
        });
    }

    listAll() {
        this.taskService.listAllTasks()
            .subscribe((res) => {
                this.tasks = res;
                this.processTasks();
            });
    }
    findByString(str: String) {
        this.taskService.findTasksByString(this.searchQuery)
            .subscribe((res) => {
                this.tasks = res;
                this.processTasks();
            });

        this.taskService.findProjectsByString(this.searchQuery)
            .subscribe((res) => {
                this.projects = res;
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

    ngOnChanges(changes: SimpleChanges) {
        if (changes && changes.searchQuery) {
            console.log('chaned query', this.searchQuery);
            this.findByString(this.searchQuery);
        }
    }
}

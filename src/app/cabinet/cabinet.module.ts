import { NgModule } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHandler} from '@angular/common/http';//;
import { TaskDashboardComponent } from './containers/task-dashboard/task-dashboard.component';
import { BrowserModule } from '@angular/platform-browser';
import { TaskService } from '../../services/task.service';
import { RequestService } from '../../services/request.service';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    TaskDashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    RequestService,
    TaskService,
  ],
  exports: [
    TaskDashboardComponent
  ]
})
export class CabinetModule {

}

import { NgModule } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHandler} from '@angular/common/http';//;
import { TaskDashboardComponent } from './containers/task-dashboard/task-dashboard.component';
import { BrowserModule } from '@angular/platform-browser';
import { TaskService } from '../../services/task.service';
import { RequestService } from '../../services/request.service';
import {CommonModule} from '@angular/common';
import { MenubarComponent } from './containers/menubar/menubar.component';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatButtonToggleModule} from '@angular/material/button-toggle'

@NgModule({
  declarations: [
    TaskDashboardComponent,
    MenubarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatButtonModule,
    MatButtonToggleModule
  ],
  providers: [
    RequestService,
    TaskService,
  ],
  exports: [
    TaskDashboardComponent,
    MenubarComponent
  ]
})
export class CabinetModule {

}

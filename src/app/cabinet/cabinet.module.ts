import { NgModule } from '@angular/core';
import { TaskDashboardComponent } from './containers/task-dashboard/task-dashboard.component';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  declarations:[
    TaskDashboardComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    TaskDashboardComponent
  ]
})
export class CabinetModule {

}

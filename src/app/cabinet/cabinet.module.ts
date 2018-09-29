import {NgModule} from '@angular/core';
import {TaskDashboardComponent} from './containers/task-dashboard/task-dashboard.component';
import {MenubarComponent} from './containers/menubar/menubar.component';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
    declarations: [
        TaskDashboardComponent,
        MenubarComponent
    ],
    imports: [
        BrowserModule
    ],
    exports: [
        TaskDashboardComponent,
        MenubarComponent
    ]
})
export class CabinetModule {

}

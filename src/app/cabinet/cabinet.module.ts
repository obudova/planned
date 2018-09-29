import {NgModule} from '@angular/core';
import {HttpClient, HttpClientModule, HttpHandler} from '@angular/common/http';
import {TaskDashboardComponent} from './containers/task-dashboard/task-dashboard.component';
import {BrowserModule} from '@angular/platform-browser';
import {TaskService} from '../../services/task.service';
import {RequestService} from '../../services/request.service';
import {CommonModule} from '@angular/common';
import {MenubarComponent} from './containers/menubar/menubar.component';
import {
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatAutocompleteModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatTooltipModule,
} from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        TaskDashboardComponent,
        MenubarComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
        MatButtonModule,
        MatToolbarModule,
        MatSidenavModule,
        MatAutocompleteModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatDatepickerModule,
        MatDialogModule,
        MatExpansionModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,
        MatStepperModule,
        MatTableModule,
        MatTabsModule,
        MatTooltipModule,
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

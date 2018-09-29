import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CabinetModule } from './cabinet/cabinet.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CabinetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

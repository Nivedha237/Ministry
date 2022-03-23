import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegisterformComponent } from './registerform/registerform.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentService } from 'src/Services/Student.Services';
import { MinistryComponent } from './ministry/ministry.component';
import { MinistryService } from 'src/Services/ministry.service';
import { StateService } from 'src/Services/state.services';
import { InstituteComponent } from './institute/institute.component';
import { InstituteService } from 'src/Services/Institute.service';
@NgModule({
  declarations: [
    AppComponent,
    RegisterformComponent,
    MinistryComponent,
    InstituteComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [StudentService,StateService,MinistryService,InstituteService],
  bootstrap: [AppComponent]
})
export class AppModule { }

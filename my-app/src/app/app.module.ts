import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { appRouterModule} from './app.routes';
import { MyProjectComponent } from './my-project/my-project.component';
import { MyTaskComponent } from './my-task/my-task.component';
import { AgGridModule }  from "ag-grid-angular";
import { dropDownToggleDirective }  from "./directives/dropdown.directive";
import { MatNativeDateModule,MatFormFieldModule,MatInputModule } from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateSheetComponent } from './createSheet/create-Sheet.component';
import { urlManagerService } from './urlManger.service';

@NgModule({
  declarations: [
    AppComponent,
	MyProjectComponent,
	MyTaskComponent,
	CreateSheetComponent,
	dropDownToggleDirective
  ],
  imports: [
    BrowserModule,
	FormsModule,
    ReactiveFormsModule,
	appRouterModule,
	AgGridModule.withComponents([ ]),
	MatDatepickerModule,
	MatNativeDateModule,
	BrowserAnimationsModule,
	MatFormFieldModule,
	MatInputModule,
	HttpClientModule
  ],
  providers: [urlManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

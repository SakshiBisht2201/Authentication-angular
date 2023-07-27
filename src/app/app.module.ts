import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import{HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { ServiceService } from './Authenticate/service.service';
import { ExampleInterceptorInterceptor } from './example-interceptor.interceptor';
import { DashboardComponent } from './dashboard/dashboard.component';
//import { AddDepartmentComponent } from './add-department/add-department.component';
//import { DirectiveDirective } from './hover/directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
   // LoginComponent
    //AddDepartmentComponent,
   // DirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,HttpClientModule, BrowserAnimationsModule
  ],
  providers: [
    {

      provide: HTTP_INTERCEPTORS,

      useClass: ExampleInterceptorInterceptor,

      multi: true,

    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

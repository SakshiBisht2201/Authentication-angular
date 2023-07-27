import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { AddUpdateEmployeeComponent } from './add-update-employee/add-update-employee.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { HoverDirective } from './hover.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    ViewEmployeeComponent,
    AddUpdateEmployeeComponent,
    
    HoverDirective
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    FormsModule,
    NgbModule
    
  ]
})
export class EmployeeModule { }

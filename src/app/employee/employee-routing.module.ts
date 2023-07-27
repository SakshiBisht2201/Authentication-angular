import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { AddUpdateEmployeeComponent } from './add-update-employee/add-update-employee.component';

const routes: Routes = [{path:'view-employee',component:ViewEmployeeComponent},
{path:'add',component:AddUpdateEmployeeComponent},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }

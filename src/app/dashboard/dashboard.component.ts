import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
constructor(private route:Router){

}
  logOut(){
    localStorage.clear();
    this.route.navigate(['/login'])
  }
  DepartmentModule(){
    this.route.navigate(['/department/view'])
  }
  View(){
    this.route.navigate(['employee/view-employee']);
  }
}

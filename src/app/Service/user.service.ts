import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

fetchEmployee(){
  return this.http.get('http://localhost:5209/api/Employee/GetEmployee');
}
updateRecord(data:any){
return this.http.put('http://localhost:5209/api/Employee/UpdateEmployeeRecord',data)
}

addRecord(data:any){
  return this.http.post('http://localhost:5209/api/Employee/PostEmployeeData',data)
  }

  fetchDepartment(){
    return this.http.get('http://localhost:5209/api/Department/GetDepartment');
  }
  deleteDepartment(id:number){
    return this.http.delete('http://localhost:5209/api/Department/DeleteDepartment?id='+id)
  }
  deleteEmployee(id:number){
    return this.http.delete('http://localhost:5209/api/Employee/DeleteEmployee?id='+id)
  }
  getEmployeeById(id:number){
  return this.http.get('http://localhost:5209/api/Employee/GetById?id='+id)
  }
}

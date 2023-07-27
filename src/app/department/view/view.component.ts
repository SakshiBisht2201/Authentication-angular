import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  displayedColumns:string[]=['deptId','departmentName','action']
  isChildComponent:boolean=false;
   
    data:any
      @ViewChild(MatPaginator) paginator!: MatPaginator;
      @ViewChild(MatSort) sort!: MatSort;
  dataSource: any;
      constructor( private _userService:UserService) {
    
        this.fetchDepartmentData();
        //let token = this.getDecodedAccessToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODI2NzY4MjQsImlzcyI6IlNha3NoaSIsImF1ZCI6IkFudXNoa2EifQ.EAWTrwrbv6JuZUUIX6Br90gC42Y9oHCNkWbgUugoV2g")
      }
      fetchDepartmentData(){
this._userService.fetchDepartment().subscribe((res:any)=>{
  console.log(res);
  this.data=res;
  this.dataSource = new MatTableDataSource(res);
  this.dataSource.sort = this.sort;
  this.dataSource.paginator = this.paginator;
})
      }

      applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    
        if (this.dataSource.paginator) {
          this.dataSource.paginator.firstPage();
        }
      }
      OpenEditForm(){
        debugger
       this.data;
       console.log(this.data);
       this.isChildComponent=true;
      }
      deleteDepartmentData(id:number){
        this._userService.deleteDepartment(id).subscribe(res=>{
          console.log(res);
          this.fetchDepartmentData(); 
        })
      }
  }



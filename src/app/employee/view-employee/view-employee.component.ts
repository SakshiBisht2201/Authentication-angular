import { UserService } from 'src/app/Service/user.service';
import {AfterViewInit, Component, EventEmitter, Output, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


export class EmployeeData{
  empId:number=0;
  employeeName:string=''
  email:string='';
  deptId:number=0;
  phoneNo:string='';
  departmentName:string=''
  }
  

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent {
  dataSource!: MatTableDataSource<any>;

  data!:any;
  displayedColumns:string[]=['empId','employeeName','email','deptId','phoneNo','departmentName','action']
  isChildComponent:boolean=false;
   @Output() fieldValue= new EventEmitter<any>();
    addData!:EmployeeData;
      @ViewChild(MatPaginator) paginator!: MatPaginator;
      @ViewChild(MatSort) sort!: MatSort;
      ngOnInit(){
    
      }
      constructor( private _userService:UserService,private route:Router,private modal:NgbModal) {
    this.addData=new EmployeeData();
        this.fetchEmployeeData();
        
      }
      fetchEmployeeData(){
this._userService.fetchEmployee().subscribe((res:any)=>{
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
      OpenAddForm(addUpdate:any){
        debugger
        this.data=this.addData;
        this.fieldValue.emit(this.addData);
        this.modal.open(addUpdate,{centered:true, size:'xl'});
    // this.route.navigate(['.employee/add-update-employee'])
     
       this.isChildComponent=true;
      }
      deleteUser(id:number){
        this._userService.deleteEmployee(id).subscribe(res=>{
          console.log(res);
          this.fetchEmployeeData(); 
        })
      }
      
      updateData(data:any,addUpdate:any){
        this.data=data;
        this.fieldValue.emit(data);
        this.modal.open(addUpdate, {centered:true, size:'xl'});

       // this.fetchEmployeeData();
        
      }
  
  }

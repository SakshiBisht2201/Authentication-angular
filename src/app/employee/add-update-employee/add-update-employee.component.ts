import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/Service/user.service';
import { ViewEmployeeComponent } from '../view-employee/view-employee.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
//import { ViewEmployeeComponent } from '../view-employee/view-employee.component';
@Component({
  selector: 'app-add-update-employee',
  templateUrl: './add-update-employee.component.html',
  styleUrls: ['./add-update-employee.component.css']
})
export class AddUpdateEmployeeComponent {
@Input() fieldValue:any;
EmployeeForm:any;
selectedValue:any;
Department: any= [
  {value: 1, viewValue: 'M.S'},
  {value: 2, viewValue: 'O.S'},
  {value: 3, viewValue: 'H.R'}
];

constructor(private formbuilder:FormBuilder,private _empService:UserService ,
  private _route: Router ,private _view:ViewEmployeeComponent, private modal:NgbModal){}
ngOnInit(){

  this.EmployeeForm=this.formbuilder.group({
    empId:[''],
    employeeName: ['',[Validators.required,Validators.minLength(3),Validators.pattern("[a-zA-Z].*")]],
  
    email:['',[Validators.required,Validators.email]],
  
    deptId:['',[Validators.required]],
  
    phoneNo:['',[Validators.required,Validators.pattern("[0-9]*"),Validators.minLength(10),Validators.maxLength(10)]]
    

   });
   console.log(this.fieldValue);
   this.EmployeeForm.patchValue(this.fieldValue);
}
onSave(val:any){
  
  if(this.EmployeeForm.valid){
    const Data=this.EmployeeForm.value
  if(Data.empId ){
 
    
  console.log(val)

  this._empService.updateRecord(Data).subscribe((xyz:any)=>{
      console.log(xyz); 
      
      alert(xyz.responseMessage); 
    
})
this._view.fetchEmployeeData();
this.closemodal();
  }
  else{
    Data.empId=0;
    console.log(val)
    debugger

    this._empService.addRecord(Data).subscribe((res:any)=>{

      alert(res.responseMessage);

   console.log(Data);
       this._view.fetchEmployeeData();
      
    
        })
        this.closemodal();
}
}
// onSave(data:any){
//   debugger
// this._empService.addRecord(data).subscribe(res=>{

// })
// }
}
closemodal(){
  this.modal.dismissAll();
}
}

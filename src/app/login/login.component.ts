import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../Service/user.service';
import { Router } from '@angular/router';
import { Token } from '@angular/compiler';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone:true,
  imports:[ReactiveFormsModule],
})
export class LoginComponent {

  constructor(private _user:UserService,private route:Router,private auth:AuthService){

  }
  LoginForm=new FormGroup({
    userName:new FormControl('',[Validators.required,Validators.minLength(3),Validators.pattern("[a-zA-Z].*")]),
    emailId:new FormControl('',[Validators.required,Validators.email])
 
  })
  LoginFormSubmit(){
    if(this.LoginForm.valid){
     
    this.auth.login(this.LoginForm.value).subscribe((res:any)=>{
      localStorage.setItem("token",res.token);
      if(res.token==null){
        alert(" Not Valid User");
        this.route.navigate(['login'])
      }
      else{
        alert("successfull");
         this.route.navigate(['./dashboard']);
        
      }
      
       // localStorage.setItem("token",res.token);
        
        // this.route.navigate(['./employee/view-employee'])
      
        
       
    })
//this._user.login(this.LoginForm.value);

  
  }
}
}

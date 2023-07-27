import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class ExampleInterceptorInterceptor implements HttpInterceptor {

  constructor(private route:Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
   
    let token=localStorage.getItem('token');

    // let authservice=this.inject.get(UserService)
if(token){
  request=request.clone({
    setHeaders:{Authorization:"Bearer"+ token}
  })
}
 
    return next.handle(request).pipe(
      catchError((err:any)=>{
if(err instanceof HttpErrorResponse){
  if(err.status==401){
    alert("token expired")
    this.route.navigate(['login'])
    console.log(token);
  }
}

return throwError(()=>new Error("some Other Error Occured"));
     
  }  )
    )
    

  } }


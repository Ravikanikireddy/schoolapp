import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public loginForm:FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  });

  constructor(private loginService:LoginService,private router:Router){}

  login(){
        console.log(this.loginForm);
        this.loginService.doLogin(this.loginForm.value).subscribe(
          (data:any)=>{
            alert("Login Success");
            this.router.navigateByUrl("/dashboard");
            localStorage.setItem('token',data.token);
          },
          (err:any)=>{
            alert("Login Failed")
          }
        )
  }
   
 }

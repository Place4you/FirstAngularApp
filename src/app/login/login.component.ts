import { UserService } from './../user.service';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, SignupComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  userSrv = inject(UserService);
  userObj: any = {
    username: '',
    password: ''
  }
  router = inject(Router)
  loginurl = '/login';
  login:boolean= true;

 
  onHardLogin(){
    if(this.userObj.username =='admin' && this.userObj.password == '1234')
    {
      localStorage.setItem('loggedUser', this.userObj.username);
      alert('Login Successful!');
      this.router.navigateByUrl('add-header')
    }
    else{
      alert('Invalid Details.')
    }
  }

  singuppage(){
    this.login = false;
  }
  onApiLogin(){
    debugger;
    this.userSrv.loginUser(this.loginurl, this.userObj);
  }



}

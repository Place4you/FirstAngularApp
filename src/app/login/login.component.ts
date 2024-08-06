import { UserService } from './../user.service';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
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
    this.router.navigateByUrl('signup');
  }
  onApiLogin(){
    this.userSrv.loginUser(this.loginurl, this.userObj);
  }



}

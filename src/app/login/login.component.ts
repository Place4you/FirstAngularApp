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

  userObj: any = {
    username: '',
    password: ''
  }
  router = inject(Router)
  onLogin(){
    
    if(this.userObj.username =='admin' && this.userObj.password == '1234')
    {
      alert('Login Successful!');
      this.router.navigateByUrl('add-header')
    }
    else{
      alert('Invalid Details.')
    }
  }



}

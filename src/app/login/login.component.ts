import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from './../user.service';
import { SignupComponent } from '../signup/signup.component';  // Ensure this import is correct
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, SignupComponent, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userSrv = inject(UserService);
  router = inject(Router);
  loginurl = "/login";
  login:boolean=true;

  userObj: any = {
    emailId: '',
    Password: ''
  };

  errorMessage: string | null = null;

  onApiLogin() {
      const loginUser = {
        emailId: this.userObj.emailId,
        Password: this.userObj.Password
      };
      this.userSrv.loginUser('/login', loginUser).subscribe(
        response => {
          localStorage.setItem('loggedUser', JSON.stringify(response)); // Assuming response contains user details
          alert('Login successful!');
          this.router.navigateByUrl('/layout/add-header');
        },
        error => {
          this.errorMessage = 'Login after signup failed. Please try logging in manually.';

        })

      }


  onHardLogin() {
    const loginUser = {
      emailId: this.userObj.emailId,
      Password: this.userObj.Password
    };
  
    if (loginUser.emailId === "admin" && loginUser.Password === "admin") {
      const userData = {
        user: loginUser.emailId,
        pass: loginUser.Password
      };
  
      // Convert the object to a JSON string and store it in localStorage
      localStorage.setItem('data', JSON.stringify(userData));
      this.router.navigateByUrl('/layout/user-list');
      alert('Login successful!');
    } else {
      alert('Login after signup failed. Please try logging in manually.');
    }
  }


  }



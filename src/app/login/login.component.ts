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
    username: '',
    password: ''
  };

  errorMessage: string | null = null;

  onApiLogin() {
    if (this.userObj.username && this.userObj.password) {
      this.userSrv.loginUser(this.loginurl, this.userObj).subscribe(
        response => {
          // Handle successful login
          localStorage.setItem('loggedUser', this.userObj.username);
          alert('Login successful!');
          this.router.navigateByUrl('/add-header');
        },
        error => {
          // Handle login error
          this.errorMessage = 'Login failed. Invalid details.';
        }
      );
    } else {
      this.errorMessage = 'Please fill all the fields.';
    }
  }

  singuppage() {
    this.router.navigateByUrl('/signup');
  }
}

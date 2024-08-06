import { UserService } from './../user.service';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
 
  router= inject(Router);
  http= inject(HttpClient);
  userSrv = inject(UserService);
  errorMessage: string | null = null;
  posturl = '/CreateNewUser';


  newUserobj:any={ 
      "userId": 0,
      "emailId": "",
      "fullName": "",
      "password": ""
  }



  onSignup() {
    debugger;

    if (this.newUserobj.emailId && this.newUserobj.fullName && this.newUserobj.password) {
      this.userSrv.createUser(this.posturl, this.newUserobj).subscribe(
        response => {
          debugger;
          // Handle successful signup
          alert('Signup successful!');
          this.router.navigateByUrl('/login');
        },
        error => {
          // Handle signup error
          this.errorMessage = 'Signup failed. Please try again.';
        }
      );
    } else {
      this.errorMessage = 'Please fill all the fields.';
    }
  }

}

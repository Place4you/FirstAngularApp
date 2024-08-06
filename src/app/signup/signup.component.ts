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

  newUserobj:any={
    email:'',
    fullname:'',
    password:''
  }
  posturl = '/CreateNewUser';



  onSignup(){
    this.userSrv.createUser(this.posturl, this.newUserobj)
    
  }

}

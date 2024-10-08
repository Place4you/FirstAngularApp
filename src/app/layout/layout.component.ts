import { FormsModule, NgModel } from '@angular/forms';
import { DepartmentSrvService } from './../shared/services/department-srv.service';
import { NgIf } from '@angular/common';
import { Component, inject, NgModule, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgIf, FormsModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent{

  selectedRole :string = "";
  

  router = inject(Router)
  login:boolean= false;
  userName: string;
  
  constructor(router: Router, private dept : DepartmentSrvService){

    const loggedUser = JSON.parse(localStorage.getItem('loggedUser') || '{}'); // Retrieve and parse the object
    this.userName = loggedUser.data.emailId || ''; // Access the fullName property and store it in a variable
    console.log(this.userName); // Output the fullName to the console



  }

    onRoleChange(role:string){
      this.dept.onRoleChange$.next(role);
      this.dept.onRoleChangeBehaviour$.next(role);
      console.log(role);
    

  }



 


  onLogout(){
    localStorage.removeItem('signupUser');
    localStorage.removeItem('loggedUser');
    this.router.navigateByUrl('login');
  }
}

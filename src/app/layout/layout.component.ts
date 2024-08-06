import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent{

  router = inject(Router)
  login:boolean= false;
  userName: string | null = null;
  loggedUser:any;
  constructor(router: Router){
    const user = localStorage.getItem('loggedUser');
    this.loggedUser = user ? JSON.parse(user) : null;
  }


 


  onLogout(){
    localStorage.removeItem('signupuser');
    this.router.navigateByUrl('login');
  }
}

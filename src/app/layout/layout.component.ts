import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  constructor(router: Router){}
  router = inject(Router)
  login:boolean= false;
  onLogout(){
    localStorage.removeItem('loggedUser');
    this.router.navigateByUrl('login');
  }
}

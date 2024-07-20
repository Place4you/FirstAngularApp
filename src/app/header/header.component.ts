import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title: string = 'This is loaded Dynamically from HEADER' ;
  imgUrl: string = "sadi.jpg";
  first: number = 53;
  second: number = 93;
}

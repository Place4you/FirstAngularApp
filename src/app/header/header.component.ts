import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title: string = 'This is loaded Dynamically from HEADER' ;
  imgUrl: string = "sadi.jpg";
  first: number = 53;
  second: number = 93;
}

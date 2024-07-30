import { CurrencyPipe, DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [ UpperCasePipe, LowerCasePipe, TitleCasePipe, DatePipe, CurrencyPipe, JsonPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  showcase: string = 'This is loaded Dynamically from HEADER' ;
  student : object=[
    {
      id:3, name:'Sadi',email:'sadiraja600@gmail.com'
    }
  ]

  date: Date= new Date();
}

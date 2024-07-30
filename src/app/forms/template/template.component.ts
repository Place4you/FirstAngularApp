import { Component, NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-template',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './template.component.html',
  styleUrl: './template.component.css'
})
export class TemplateComponent {

  client: any ={
    firstname:'',
    lastname:'',
    city:'',
    state:'',
    zip:''

  }
  
}

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GetapiComponent } from './getapi/getapi.component';
import { PostapiComponent } from './postapi/postapi.component';

@Component({
  selector: 'app-api',
  standalone: true,
  imports: [RouterLink, GetapiComponent, PostapiComponent],
  templateUrl: './api.component.html',
  styleUrl: './api.component.css'
})
export class ApiComponent {
  get: boolean=false;
  post: boolean=true;
    
  callGetApi(){
    this.get= true;
  }
  callPostApi(){
    this.post= true;
  }
}

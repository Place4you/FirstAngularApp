import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-getapi',
  standalone: true,
  imports: [JsonPipe, FormsModule],
  templateUrl: './getapi.component.html',
  styleUrl: './getapi.component.css'
})
export class GetapiComponent {

  constructor(private http: HttpClient){
    this.getusers();
  }
  list:any[]=[];
  data:any;
  apiurl:string='https://dummyjson.com/c/3029-d29f-4014-9fb4';
  getusers(){
  
    this.http.get(this.apiurl).subscribe((res:any)=>{
 
      this.data = res;
    })
  }
  

}

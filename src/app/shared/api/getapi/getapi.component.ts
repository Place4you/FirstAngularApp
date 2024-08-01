import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-getapi',
  standalone: true,
  imports: [HttpClient],
  templateUrl: './getapi.component.html',
  styleUrl: './getapi.component.css'
})
export class GetapiComponent {

  http = inject (HttpClient);
  list:any[]=[];
  getusers(){
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res:any)=>{
      this.list = res.value;
    })
  }

}

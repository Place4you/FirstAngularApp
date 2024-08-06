import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  http = inject(HttpClient);
  apiurl='https://projectapi.gerasim.in/api/UserApp/';


  createUser(url:string,data:any){
    debugger;
    return this.http.post(`${this.apiurl}` +url, data);

  }

  loginUser(url:string,data:{emailId:any, Password:any}){
    debugger;
    return this.http.post(`${this.apiurl}` +url, data);
  }
}

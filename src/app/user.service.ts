import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  http = inject(HttpClient);
  apiurl='https://projectapi.gerasim.in/api/UserApp/';


  createUser(url:string,data:any){
    return this.http.post(`${this.apiurl}` +url, data).subscribe(
      (res: any) => {
        alert("Singup successfully");
      },
      (error) => {
        alert('Failed to Signup. Please try again later.');
      }

    );

  }

  loginUser(url:string,data:any){
    return this.http.post(`${this.apiurl}` +url, data).subscribe(
      (res: any) => {
        localStorage.setItem('newuser', JSON.stringify(res.data));
      },
      (error) => {
      }

    );
  }
}

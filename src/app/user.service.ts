import { Constant } from './core/constants/Constant';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  http = inject(HttpClient);


  createUser(url:string,data:any){
    return this.http.post(`${Constant.API_URL}` +url, data);

  }

  loginUser(url:string,data:{emailId:any, Password:any}){
    return this.http.post(`${Constant.API_URL}` +url, data);
  }
}

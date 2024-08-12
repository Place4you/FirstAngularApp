import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Constant } from '../../core/constants/Constant';

@Injectable({
  providedIn: 'root'
})
export class DepartmentSrvService {

  constructor(private http:HttpClient) {

   }

  getallapi(getdept:any){

    return this.http.get(getdept);
  }

  postallapi(url: string, data:any){
    debugger;
    return this.http.post(url,data);
  }
}

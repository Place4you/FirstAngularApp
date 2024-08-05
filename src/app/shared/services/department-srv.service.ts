import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentSrvService {

  constructor(private http:HttpClient) {
  

   }
   apiurl: string = "https://projectapi.gerasim.in/api/Complaint/";

  getallapi(getdept:any){
    return this.http.get(`${this.apiurl}` +getdept);
  }

  postallapi(update: string, data:any){
    debugger;
    return this.http.post(`${this.apiurl + update}`,data);
  }
}

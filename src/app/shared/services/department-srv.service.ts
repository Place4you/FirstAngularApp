import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentSrvService {

  constructor(private http:HttpClient) {
  

   }

  getallapi(dep:any){

    return this.http.get(this.dep);
    debugger;
  }
}

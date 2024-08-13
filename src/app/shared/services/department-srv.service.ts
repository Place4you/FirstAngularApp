import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Constant } from '../../core/constants/Constant';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentSrvService {

  onRoleChange$ : Subject<string> = new Subject<string>;

  constructor(private http:HttpClient) {

   }

  getallapi(getdept:any){

    return this.http.get(getdept);
  }

  postallapi(url: string, data:any){
    return this.http.post(url,data);
  }
}

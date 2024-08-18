import { CurrencyPipe, DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DepartmentSrvService } from '../shared/services/department-srv.service';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [ UpperCasePipe, LowerCasePipe, TitleCasePipe, DatePipe, CurrencyPipe, JsonPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent{
currentRole:string = '';
behaviourSubject:string = '';
constructor(private dept:DepartmentSrvService){
    this.dept.onRoleChange$.subscribe((role:string)=>{
    this.currentRole = role;

    //susbcribe to Behaviour Subject
    this.dept.onRoleChangeBehaviour$.subscribe((res:string)=>{
      debugger;
      this.behaviourSubject = res;
        });
    
  });
}

  showcase: string = 'This is loaded Dynamically from HEADER' ;
  student : object=[
    {
      id:3, name:'Sadi',email:'sadiraja600@gmail.com'
    }
  ]

  date: Date= new Date();
}

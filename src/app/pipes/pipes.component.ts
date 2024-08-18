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
currentRole:any;
constructor(private dept:DepartmentSrvService){
    this.dept.onRoleChange$.subscribe((role:string)=>{
    this.currentRole = role;
    console.log(role);
    
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

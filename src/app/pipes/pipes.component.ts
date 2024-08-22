import { CurrencyPipe, DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { ChangeDetectorRef, Component, DoCheck, OnChanges, OnInit, SimpleChange } from '@angular/core';
import { DepartmentSrvService } from '../shared/services/department-srv.service';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [ UpperCasePipe, LowerCasePipe, TitleCasePipe, DatePipe, CurrencyPipe, JsonPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent implements DoCheck{
  subjectVar:string = '';
  behaviourSubject:string = '';
constructor(private dept:DepartmentSrvService){}

ngDoCheck(){
  //subscribe to Subject
  this.dept.onRoleChange$.subscribe((res:string)=>{
    this.subjectVar =  res;
  })

  //susbcribe to Behaviour Subject
  this.dept.onRoleChangeBehaviour$.subscribe((res:string)=>{
    this.behaviourSubject = res;
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

import { Component, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-life-cycle-events',
  standalone: true,
  imports: [],
  templateUrl: './life-cycle-events.component.html',
  styleUrl: './life-cycle-events.component.css'
})
export class LifeCycleEventsComponent implements  OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{
  constructor(){
    console.log('constructor');
    
  }

  ngOnInit(){
    console.log('Onit');
  }

  ngDoCheck(){
    console.log('ngDoCheck');
  }

  ngAfterContentInit(){
    console.log('AfterContentInit');
  }

  ngAfterContentChecked(){
    console.log('AfterContentChecked');
  }

  ngAfterViewInit(){
    console.log('AfterViewInit');
  }

  ngAfterViewChecked(){
    console.log('AfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('onDestroy');
    
  }


}

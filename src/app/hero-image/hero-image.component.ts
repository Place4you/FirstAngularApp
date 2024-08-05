import { ViewchildComponent } from './../viewchild/viewchild.component';
import { NgClass, NgStyle, NgSwitch } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-hero-image',
  standalone: true,
  imports: [NgStyle, NgClass, ViewchildComponent],
  templateUrl: './hero-image.component.html',
  styleUrl: './hero-image.component.css'
})
export class HeroImageComponent implements AfterViewInit {

  person: string = 'member';
  test: boolean= false;
  testr: boolean= true;
  msg:any;

  @ViewChild(ViewchildComponent) view?: ViewchildComponent;

  ngAfterViewInit(){
   this.msg=this.view?.msg;
   console.log(this.msg);
   
}
}

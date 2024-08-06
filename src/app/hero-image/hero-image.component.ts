import { ViewchildComponent } from './../viewchild/viewchild.component';
import { NgClass, NgStyle, NgSwitch } from '@angular/common';
import { AfterViewInit, Component, ElementRef, viewChild, ViewChild} from '@angular/core';

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
  throgh:any = '';
  @ViewChild(ViewchildComponent) view?: ViewchildComponent;
  @ViewChild(ViewchildComponent) catcher?: ViewchildComponent;

  ngAfterViewInit(){
   this.msg=this.view?.msg;
   this.throgh = this.catcher?.catch;
   console.log(this.msg);




   
   
}
}

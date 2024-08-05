import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
@Component({
  selector: 'app-viewchild',
  standalone: true,
  imports: [],
  templateUrl: './viewchild.component.html',
  styleUrl: './viewchild.component.css'
})
export class ViewchildComponent implements AfterViewInit{
  @ViewChild('txt') textbox?:ElementRef;

  msg:string= ("message from child componenet named ViewChild");

  ngAfterViewInit(): void {
    const value = this.textbox?.nativeElement.value;
    console.log(value);
    
  }
}

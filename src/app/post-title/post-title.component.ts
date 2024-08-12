import { Component, EventEmitter, Input, Output, signal } from '@angular/core';

@Component({
  selector: 'app-post-title',
  standalone: true,
  imports: [],
  templateUrl: './post-title.component.html',
  styleUrl: './post-title.component.css'
})
export class PostTitleComponent {

  constructor(){
    setTimeout(() => {
      this.firstName= signal("after Change");
    }, 5000);
  }

  @Input() toChild: string = '';  
  // childData : string = 'This data is coming from child using @output & Event Emiter';


  // Signal Testing
  firstName= signal("before Change");
  lastName= "before Change";


  @Output() myData = new EventEmitter<string>();

  sendData(){
    this.myData.emit('This data is coming from child using @output & Event Emiter');
    // console.log('sent');
    
  }
}

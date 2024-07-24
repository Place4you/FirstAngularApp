import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-post-title',
  standalone: true,
  imports: [],
  templateUrl: './post-title.component.html',
  styleUrl: './post-title.component.css'
})
export class PostTitleComponent {
  @Input() toChild: string = '';  
  // childData : string = 'This data is coming from child using @output & Event Emiter';

  @Output() myData = new EventEmitter<string>();

  sendData(){
    this.myData.emit('This data is coming from child using @output & Event Emiter');
    // console.log('sent');
    
  }
}

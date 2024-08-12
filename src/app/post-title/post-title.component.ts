import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, signal } from '@angular/core';

@Component({
  selector: 'app-post-title',
  standalone: true,
  imports: [],
  templateUrl: './post-title.component.html',
  styleUrl: './post-title.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostTitleComponent {

  constructor(){
    const firstname =  this.firstName();
    setTimeout(() => {
      this.firstName.set("after Change Signal");
      this.lastName = "after Change Variable";
    }, 5000);
  }

  // Signal Testing
  firstName= signal("before Change Signal");
  lastName= "before Change Variable";



  @Input() toChild: string = '';  
  // childData : string = 'This data is coming from child using @output & Event Emiter';



  @Output() myData = new EventEmitter<string>();

  sendData(){
    this.myData.emit('This data is coming from child using @output & Event Emiter');
    // console.log('sent');
    
  }
}

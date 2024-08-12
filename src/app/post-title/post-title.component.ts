import { ChangeDetectionStrategy, Component, computed, EventEmitter, Input, Output, signal } from '@angular/core';

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
    setTimeout(() => {
      // this.lastName = "after Change Variable";
      debugger;
    }, 5000);
  }

  // Signal Testing
  firstName= signal<string>("Saadat");
  lastName = signal<string>('Ali');

  fullName= computed(()=>  this.firstName() +" " + this.lastName());

  changeFirst(){
    this.firstName.set('Babar');
  }
  changeLast(){
    this.lastName.set('Azam');
  }
// changing Array signal

  cityList = signal(['lahore','islamabad','karachi']);
  addCity(){
    this.cityList.set([...this.cityList(),'mirpur'])
  }

  // changing object signal
 stuObj = signal({
  name:'sadi',
  city:'jehlum'
 })

 changeObj(){
   this.stuObj.set({...this.stuObj(), city:'mirpur'});
 }


  @Input() toChild: string = '';  
  // childData : string = 'This data is coming from child using @output & Event Emiter';



  @Output() myData = new EventEmitter<string>();

  sendData(){
    this.myData.emit('This data is coming from child using @output & Event Emiter');
    // console.log('sent');
    
  }
}

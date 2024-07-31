import { Component } from '@angular/core';
import { TemplateComponent } from './template/template.component';
import { ReactiveComponent } from './reactive/reactive.component';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [ TemplateComponent,ReactiveComponent],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {

  templateform: boolean= false;
  reactiveform: boolean= false;

  template(){
    this.templateform = true;
  }

  reactive(){
    this.reactiveform= true;
  }
}

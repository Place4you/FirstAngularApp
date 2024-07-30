import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template',
  standalone: true,
  imports: [ FormsModule],
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {
  client: any = {
    firstname: '',
    lastname: '',
    city: '',
    region: '',
    zip: '',
    isAcceptedTerms: false
  };

  formValue: any;
  onSubmit(){
    debugger;
    this.formValue = this.client;
    console.log(this.formValue);
  }
}

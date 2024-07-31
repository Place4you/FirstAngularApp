import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.css'
})
export class ReactiveComponent {

  studentForm: FormGroup = new FormGroup({
    name: new FormControl(""),
    email: new FormControl(""),
    password: new FormControl(""),
    isAcceptedTerms: new FormControl(false),
  })

  formValues:any;
  saveForm(){
    this.formValues = this.studentForm;
  }
}

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-postapi',
  standalone: true,
  imports: [],
  templateUrl: './postapi.component.html',
  styleUrl: './postapi.component.css'
})
export class PostapiComponent {

  apiurl: string = "https://projectapi.gerasim.in/api/Complaint/AddNewDepartment";
  errorMessage: string | null = null;
  successMessage: string | null = null;
  data = {
    departmentId: 5,
    departmentName: "bonga",
    departmentLogo: "check"
  };

  constructor(private http: HttpClient) {}

  addDepartment() {
    this.http.post(this.apiurl, this.data).subscribe(
      (res: any) => {
        this.successMessage = "Department added successfully.";
        this.errorMessage = null; // Clear the error message if the request is successful
      },
      (error) => {
        this.errorMessage = "Failed to add department. Please try again later.";
        this.successMessage = null; // Clear the success message in case of error
      }
    );
  }
}

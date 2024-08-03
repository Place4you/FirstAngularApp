import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-postapi',
  standalone: true,
  imports: [CommonModule, FormsModule], // Add FormsModule
  templateUrl: './postapi.component.html',
  styleUrls: ['./postapi.component.css']
})
export class PostapiComponent implements OnInit {

  apiurl: string = "https://projectapi.gerasim.in/api/Complaint/AddNewDepartment";
  getDepartmentsUrl: string = "https://projectapi.gerasim.in/api/Complaint/GetParentDepartment";
  errorMessage: string | null = null;
  successMessage: string | null = null;
  dept: any[] = [];
  loading: boolean = false;

  // Form properties
  departmentName: string = '';
  departmentLogo: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getDepartment();
  }

  addDepartment() {
    const data = {
      departmentId: 0, // Or set an appropriate ID if needed
      departmentName: this.departmentName,
      departmentLogo: this.departmentLogo
    };

    this.http.post(this.apiurl, data).subscribe(
      (res: any) => {
        this.successMessage = "Department added successfully.";
        this.getDepartment(); // Refresh the department list
        this.departmentName = '';
        this.departmentLogo = '';
        this.errorMessage = null; // Clear the error message if the request is successful
      },
      (error) => {
        this.errorMessage = "Failed to add department. Please try again later.";
        this.successMessage = null; // Clear the success message in case of error
      }
    );
  }

  getDepartment() {
    this.loading = true;
    this.http.get<{ data: any[] }>(this.getDepartmentsUrl).subscribe(
      (res) => {
        this.dept = res.data;
        this.errorMessage = null;
        this.loading = false;
      },
      (error) => {
        this.errorMessage = "Failed to fetch data. Please try again later.";
        this.loading = false;
      }
    );
  }
}

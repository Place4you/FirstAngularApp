import { Component, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { DepartmentSrvService } from '../../services/department-srv.service';
import { IDepartment } from '../../../core/models/interface/IDepartment';

@Component({
  selector: 'app-postapi',
  standalone: true,
  imports: [CommonModule, FormsModule], // Add FormsModule
  templateUrl: './postapi.component.html',
  styleUrls: ['./postapi.component.css']
})
export class PostapiComponent implements OnInit {

  errorMessage: string | null = null;
  successMessage: string | null = null;
  loading: boolean = false;
  update: boolean = false;
  updatedept: string = "UpdateDepartment";
  getdept: string = "GetParentDepartment";
  adddept: string = "AddNewDepartment";
  url:string = '';

  deptInfo: IDepartment [] = [];
  dept: any[]=[];
  departmentId: number= 0;
  departmentLogo = '';
  departmentName = '';
  // Form properties


// service for department
  constructor(private depsrv: DepartmentSrvService){}

  http = inject(HttpClient);

  ngOnInit() {
    this.getDepartment();
  }
// Add a new Department
  addDepartment() {
      const data = {
        departmentId: this.update ? this.departmentId : 0, // Or set an appropriate ID if needed
        departmentName: this.departmentName,
        departmentLogo: this.departmentLogo
      };
      this.url = this.update? this.updatedept: this.adddept;

    this.depsrv.postallapi(this.url ,data).subscribe(
      (res: any) => {
        this.update = false;
        this.successMessage= this.update?"Department Updated successfully.":"Department added successfully.";
        this.getDepartment(); // Refresh the department list
        this.clearForm();
        this.errorMessage = null; // Clear the error message if the request is successful
      },
      (error) => {
        this.errorMessage = this.update?"Failed to Update department. Please try again later.":"Failed to add department. Please try again later.";
        this.successMessage = null; // Clear the success message in case of error
      }
    );
  }


    // Clear the form
    clearForm() {
      this.departmentId = 0;
      this.departmentName = '';
      this.departmentLogo = '';
      this.update = false;
    }
    
// Fetch Department data
  getDepartment() {
    this.loading = true;

    this.depsrv.getallapi(this.getdept).subscribe(
      (res:any) => {
        this.deptInfo = res.data;
        this.errorMessage = null;
        this.loading = false;
      },
      (error) => {
        this.errorMessage = "Failed to fetch data. Please try again later.";
        this.loading = false;
      }
    );
  }

  // Edit exisitng Department

  editDept(dep:any){
    this.departmentId =  dep.departmentId; // Or set an appropriate ID if needed
    this.departmentName = dep.departmentName;
    this.departmentLogo = dep.departmentLogo;
    this.dept = dep;
    this.update = true;

  }

  // Delete the Department
  deleteDept(id:number){
    const del= confirm("Do you want to delete this?");
    if(del){
      const delapi = "https://projectapi.gerasim.in/api/Complaint/DeletedepartmentBydepartmentId?departmentId="+id;
      this.http.delete(delapi).subscribe((res:any)=>{
      if(res.result){
        this.successMessage= "Department Deleted successfully.";
        this.getDepartment();
      }
      else{
        this.errorMessage = " Operation Failed";
  
      }});

     
    }
   
    }

  }
  


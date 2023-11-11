import { Component, OnInit } from '@angular/core';
import { last } from 'rxjs';
import{MatTableDataSource} from '@angular/material/table'


import { UserService } from 'src/app/services/user.service';
import { Student } from './student';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 
  searchName:string="";
  p:Number=1;
  
  user: any;

  //  fromHeader = "AddStudent";
  fromHeader = "";
  public Students = new Student();
   
 showForm = false;
  id = null;

  token: any = "";

  constructor(private userService: UserService, private router: Router) { }
  userDetails = {

  }
  ngOnInit(): void {
   // debugger
    let token = sessionStorage.getItem('token' || null); //getting the token
    console.log(token);
    this.token = token;
    if (token !== null || token !== "") {
      // debugger
      this.getUser(token);
    } else {
      this.router.navigate(['login']);
    }
    // this.getUser(token);
  }
  getUser(token: any) {
   
    this.userService.getUser().subscribe((data:any) => {
      console.log(data);
      this.user = data.body;
 
      
    },
      (error) => {
        alert(error.message)
        console.log(error)
      }

    )
  }

  deleteStudent(id: any) {
    this.userService.deleteStudent(id).subscribe(
      (res) => {
        alert("student data successfully deleted")
        this.getUser(this.token); //delete records from table and database
      }
    )
  }

  openForm(data: any = null) {
    this.showForm = true; //click add button and addStudent button also
    if (data) {
      this.Students.stdId = data.stdId;
      this.Students.stdName = data.stdName;
      this.Students.stdEmail = data.stdEmail;
      this.Students.collegeName=data.collegeName;
      this.Students.stdBranch=data.stdBranch;
      this.Students.stdPhoneNumber=data.stdPhoneNumber;
      this.Students.stdAadharNumber=data.stdAadharNumber;
      this.fromHeader = "EditStudent";
    }
    else {
      this.Students.stdId;
      this.fromHeader = "Add Student";

    }
  }

  cancelStudent() {
    this.showForm = false;
     this.clearForm()
  }
  clearForm() {
    this.Students.stdId=0;
    this.Students.stdName="";
    this.Students.stdEmail="";
    this.Students.collegeName="";
    this.Students.stdBranch="";
    this.Students.stdPhoneNumber="";
    this.Students.stdAadharNumber="";
  }

  saveStudent() {//post response
    if (this.fromHeader==='EditStudent') {
      this.userService.updateStudent(this.Students, this.Students.stdId).subscribe({
        next: (res) => {
          alert(res.body);
          this.cancelStudent();
        this.getUser(this.token);
        },
        error: (err) => {
          console.log(err);
        }
      })

    } else {
      console.log("add Student");
      
      this.userService.addStudent(this.Students).subscribe({
        next: (res) => {
          alert(res.body);
        
          this.getUser(this.token);
          this.cancelStudent();
          this.clearForm();
        },
        error: (err) => {
          console.log("error")
          alert(err.message)
        }
      })
    }
  }

 key:string='id';
 reverse:boolean=false;
 sort(key:any){
    this.key=key;
   this.reverse=!this.reverse;
  }
 

}





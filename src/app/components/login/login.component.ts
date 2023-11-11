import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credential = {
    email: "",
    password: "",
  }

  token : string = "";  //consider one token
  constructor(private loginService: LoginService, private router : Router) { }

  ngOnInit(): void {

  }
  onSubmit() {
    console.log(this.credential);
    
    this.loginService.generateToken(this.credential).subscribe({
      next: (data) => {
        
        alert("login Successfully")

        // this.token = data.body.token;
        // console.log(this.token);
         console.log(data);
        // sessionStorage.setItem('token',this.token);  //store the token into sessionStorage
        this.loginService.loginUser(data.body.token)
        this.router.navigate(['dashboard']);
       
       // window.location.href = "/dashboard"
        
      },
      error: (error) => {
        alert(error.body);
      }
    }


    )
  }



}

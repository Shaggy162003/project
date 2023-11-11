import { Component } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';
import { User } from './user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private registerService:RegisterService, private router : Router){ }
 
//  User={
// firstName:"",
// lastName:"",
// email:"",
// password:""
//  }
 
  public Users=new User();

  onSubmit(){

    this.registerService.register(this.Users).subscribe({
      next:(res)=>{
        console.log(res);
        
       window.location.href = "/login";
        // this.router.navigate(['/login']);

      },
      error:(error)=>{
        alert("error block");

      }
    })


  }

  

}

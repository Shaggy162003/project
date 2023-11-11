import { Component,OnInit} from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  
  constructor(private loginService:LoginService){}

public loggedIn=true;

  ngOnInit(){
    this.loggedIn=this.loginService.isLoggedIn()  //user logout
    
  }

  logOutUser(){
    this.loginService.isLogOut()  //if you click logout button it will logout
    location.reload()
  }

}

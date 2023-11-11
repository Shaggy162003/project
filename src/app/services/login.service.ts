import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // logout() {
  //   throw new Error('Method not implemented.');
  // }

  url="http://localhost:3000/login";

 

  constructor(private http:HttpClient) { }
  //calling the server to generate the token
generateToken(credential:any):Observable<any>{ //username:string,password:string
  return this.http.post(`${this.url}`,credential,{observe:'response',responseType:'json'});
}



  //for login user
  loginUser(token:any){
    sessionStorage.setItem("token",token);
    return true;
  }
  //if user is login
isLoggedIn(){
let token=sessionStorage.getItem("token");
if(token==undefined || token==='' || token===null){
  return false;
}
else{
  return true;
}
}
//if user is log out
isLogOut(){
  sessionStorage.removeItem("token");
  return true;
}
//for getting the token
getToken(){
  return sessionStorage.getItem("token")
}

}

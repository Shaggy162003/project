import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable,OnInit } from '@angular/core';
import { LoginComponent } from '../components/login/login.component';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit {

url="http://localhost:3000";
 

  constructor(private http:HttpClient,private tokenService:LoginService) { }


  ngOnInit(): void {
    
  }
  getUser(){
    let token=this.tokenService.getToken();
    const headers =new HttpHeaders().set('Authorization', 'Bearer '+token);
   return this.http.get(`${this.url}/getAll`,{headers:headers,observe:'response',responseType:'json'}); //,{observe : 'response',responseType : 'json'}            //return observable
  }

deleteStudent(id:any){
  let token=this.tokenService.getToken();
  const headers =new HttpHeaders().set('Authorization', 'Bearer '+token);
  return this.http.get(`${this.url}/delete/${id}`,{headers:headers,observe:'response',responseType:'text'})  //http://localhost:300/student/101
}

updateStudent(body:any,id:any){  //put

  let token=this.tokenService.getToken();
    const headers =new HttpHeaders().set('Authorization', 'Bearer '+token);
  return this.http.post(this.url+'/update/'+id,body,{headers:headers,observe:'response',responseType:'text'})   //we can use headers also
}

addStudent(body:any){ //post
  let token=this.tokenService.getToken();
  const headers =new HttpHeaders().set('Authorization', 'Bearer '+token);
  return this.http.post(this.url+'/save',body,{headers:headers,observe:'response',responseType:'text'})
}


}

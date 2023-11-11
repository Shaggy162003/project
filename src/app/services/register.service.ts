import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }

  url="http://localhost:3000/register";

  register(User:any):Observable<any>{  
    return this.http.post(`${this.url}`,User,{observe:'response',responseType:'text'});//
  
  }












}

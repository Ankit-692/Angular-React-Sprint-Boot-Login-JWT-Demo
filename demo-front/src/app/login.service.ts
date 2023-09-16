import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = 'http://localhost:8080/auth'

  constructor(private http:HttpClient) {}

    generateToken(credentials: any){
      return this.http.post(`${this.url}/login`,credentials)
    }
    
    logIn(token:string){
      localStorage.setItem('token',token)
    }

    logOut(){
      localStorage.removeItem('token')
    }
    
    isLoggedIn(){
      if(localStorage.getItem('token')!=null){

        return true;
      }

      return false
    }
   
    getToken(){
      return localStorage.getItem('token')
    }
}

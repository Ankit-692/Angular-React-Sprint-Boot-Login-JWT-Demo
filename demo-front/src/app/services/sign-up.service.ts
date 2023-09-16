import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  url = "http://localhost:8080/auth"

  constructor(private http:HttpClient) { }

  register(credentials:any){
    return this.http.post(`${this.url}/register`,credentials);
  }

}

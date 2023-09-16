import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  isNew = false
  constructor(private loginService:LoginService){}

  ngOnInit(): void {
    this.isNew = history.state['isNew']
  }

credentials={
  username : '',
  password : ''
}

token:any

onSubmit(){
  if(this.credentials.username!='' && this.credentials.password!='')
  {
    this.loginService.generateToken(this.credentials).subscribe({
      next:(response)=>{
        this.token = response
        console.log(this.token['accessToken'])
        this.loginService.logIn(this.token['accessToken'])
        window.location.href='/dashboard'
      },
      error: (error)=>{console.log(error)}
    }
    )
  }

}

}


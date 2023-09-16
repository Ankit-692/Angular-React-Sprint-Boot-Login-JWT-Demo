import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { SignUpService } from 'src/app/services/sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent {

constructor(private signUp:SignUpService,private router:Router){}

navigationExtras: NavigationExtras = {
  state: {isNew : true},
};


credentials = {
  username : '',
  password : ''
}


onSubmit(){
  this.signUp.register(this.credentials).subscribe({
    next:(response)=>{
      this.router.navigate(['/auth/login'],this.navigationExtras)
    },
    error:(error)=>{
        console.log(error);
    }
  }
  )
}

}

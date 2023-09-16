import { NgModule, inject } from '@angular/core';
import { Router, RouterModule, Routes, mapToCanActivate } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginService } from './login.service';

const routes: Routes = [
  {
    path : '',
    component : HomeComponent,
    pathMatch : 'full'
  },
  {
    path : 'auth/login',
    component : LoginComponent,
    pathMatch : 'full',
    canActivate:[
      ()=>{
        const auth = inject(LoginService)
        const rtr = inject(Router)
        const loc = rtr.url
        if(auth.isLoggedIn()){
          rtr.navigate([loc])
        }
          return true
      }
    ]
  },
  {
    path : 'auth/signUp',
    component : SignUpComponent,
    pathMatch : 'full',
    canActivate:[
      ()=>{
        const auth = inject(LoginService)
        const rtr = inject(Router)
        const loc = rtr.url
        if(auth.isLoggedIn()){
          rtr.navigate([loc])
        }
          return true
      }
    ]
  },
  {
    path : 'dashboard',
    component : DashboardComponent,
    pathMatch : 'full',
    canActivate:[
      ()=>{
        const auth = inject(LoginService);
        const rtr = inject(Router)
        if(!auth.isLoggedIn()){
          rtr.navigate(['/auth/login']);
        }
          return true;
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

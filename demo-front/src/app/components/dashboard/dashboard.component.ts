import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  url = 'http://localhost:8080'

  constructor(private http:HttpClient){}

  displayedColumns: string[] = ['ID','Name', 'Roles']
  dataSource:any;

  getList(){
    this.http.get(`${this.url}/getAllUser`).subscribe({
      next:(response)=>{
        this.dataSource = response
        console.log(this.dataSource)
      },
      error:(error)=>{
        console.log(error)
      }
    })
  }
}

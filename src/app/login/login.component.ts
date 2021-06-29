import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:any;
  pwd:any;
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(){

    
  }
 submit(){
   console.log(this.email,this.pwd)
   var url = "http://127.0.0.1:8000/login/";
    var body = new FormData()
    body.append('email', this.email)
    body.append('password', this.pwd)

    this.http.post<any>(url, body).subscribe(
      data => {
        console.log(data.token)
        alert('success')
        localStorage.setItem('news_token', data.token)
        this.router.navigate(['main'])
      },
      err=>{
        alert('not a registered user')
        this.router.navigate(['register'])
      }
      )
 }
}

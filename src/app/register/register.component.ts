import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  Name:any;
  email:any;
  pwd:any;
  constructor(private router: Router, private http: HttpClient,) { }

  ngOnInit(): void {
    // http://127.0.0.1:8000/me/
    
  }
  submit(){
    console.log(this.Name,this.email,this.pwd,)
    var url = "http://127.0.0.1:8000/";
    var body = new FormData()
    body.append('name', this.Name)
    body.append('email', this.email)
    body.append('password', this.pwd)


    this.http.post<any>(url, body).subscribe(
      data => {
        console.log(data.token)
        localStorage.setItem('news_token', data.token)
        alert('success')
        this.router.navigate(['login'])
      },
      err=>{
        alert('some error occured')
      }
    )
  }
}

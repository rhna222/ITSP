import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   email:any;
  pwd:any;
  constructor() { }

  ngOnInit(): void {
  }
 submit(){
   console.log(this.email,this.pwd)
 }
}

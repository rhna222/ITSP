import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  Name:any;
  email:any;
  pwd:any;
  constructor() { }

  ngOnInit(): void {
  }
  submit(){
    console.log(this.Name,this.email,this.pwd,)
  }
}

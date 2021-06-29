import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  news = [{
    headline: 'Shortage of black fungus drug',
    img:'https://images.indianexpress.com/2021/05/black-funtgus.jpg?w=626',
  },
  {
    headline: 'PM says vaccine absolutely important to save lives, defeat Covid',
    img:'https://images.indianexpress.com/2021/05/Modi-10.jpg',
  },
]

  details: any;
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    var url = "http://127.0.0.1:8000/me/";

    this.http.get<any>(url).subscribe(
      data => {
        console.log(data)
        this.details = data
      }
      )
  }

}


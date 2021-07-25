import { Component, OnInit} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import {interval} from 'rxjs';

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
  cat='general';
  emo='';
  comm='';
  newsver='';
  newscheck='';
  checkft='NOT FAKE';
  checkpn='Negative';
  ft:boolean=false;
  pn:boolean=false;
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    var url = "http://127.0.0.1:8000/get_new/";

    var body=new FormData()
    body.append('cat',this.cat)

    this.http.post<any>(url,body).subscribe(
      data => {
        console.log(data)
        this.details = data
      }
      )
  }
  get_cat() {
    localStorage.setItem('category',this.cat)
    console.log(this.cat)
    var url = "http://127.0.0.1:8000/get_new/";

    var body=new FormData()
    body.append('cat',this.cat)

    this.http.post<any>(url,body).subscribe(
      data => {
        console.log(data)
        this.details = data
      }
    )
  }

  get_emo(){
    var url = "http://127.0.0.1:8000/texttoemo/";

    var body=new FormData()
    body.append('data',this.comm)

    this.http.post<any>(url,body).subscribe(
      data => {
        console.log(data)
        this.emo = data
      }
    )
  }


  fake(article:any){
    var url = "http://127.0.0.1:8000/faketrue/";

    var body=new FormData()
    body.append('data',article)

    this.http.post<any>(url,body).subscribe(
      data => {
        console.log(data)
        this.ft = data
      }
    )
  }
  posneg(article:any){
    var url = "http://127.0.0.1:8000/posneg/";

    var body=new FormData()
    body.append('data',article)

    this.http.post<any>(url,body).subscribe(
      data => {
        console.log(data)
        this.pn = data
      }
    )
}

  // fake_true(){
  //   var url = "http://127.0.0.1:8000/faketrue/";

  //   var body = new FormData
  //   body.append('')

  //   this.http.post<any>(url,body).subscribe(
  //     data => {
  //       console.log(data)
  //       this.checkft = data
  //     }

  //   )
  // }

  // pos_neg(){
  //   var url = "http://127.0.0.1:8000/posneg/";

  //   var body = new FormData


  //   this.http.post<any>(url,body).subscribe(
  //     data => {
  //       console.log(data)
  //       this.checkpn = data
  //     }

    // )
  // }

}


import { Component, OnInit } from '@angular/core';


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
  constructor() { }

  ngOnInit(): void {
  }

}


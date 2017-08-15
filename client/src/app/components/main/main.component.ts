import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  question:string;
  answer:string;
  score:number;
  //userAnswer:string

  constructor() {
    console.log('constructor ran');
  }

  ngOnInit() {
    this.question='';
    this.answer='';
    this.score=0;
    //this.userAnswer='';
    console.log('init ran');
  }

 onClick(answer){
 console.log(answer);
   return false;
 }
}

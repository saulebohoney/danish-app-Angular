import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  question:string;
  answer:string;
  score:number;
  questions:any;
  //userAnswer:string

  constructor(private dataService:DataService) {
    console.log('constructor ran');
  }

  ngOnInit() {
    this.question='';
    this.answer='';
    this.score=0;
    //this.userAnswer='';
    console.log('init ran');

    this.dataService.getQuestions().subscribe((questions)=>
    {this.questions=questions

      console.log(questions);
    });
  }

 onClick(answer){
 console.log(answer);
   return false;
 }
}


 interface Question{
   id:number,
   title:string,
   body:string
 }
   

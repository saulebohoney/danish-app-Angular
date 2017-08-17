import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  question:any;
  value:string;
  score:number;
  questions:any;
  questionIndex:number=0;
 
  //userAnswer:string

  constructor(private dataService:DataService) {
    console.log('constructor ran');
  }

  ngOnInit() {
    this.question=0;
    this.value='';
    this.score=0;
    this.questions=[];
    
    //this.userAnswer='';
    console.log('init ran');

    this.dataService.getQuestions().subscribe((questions)=>
    {this.question=questions[this.questionIndex].question;
     // this.answer=questions[0].answer;
     this.questions=questions;
    console.log(questions);
    //console.log(this.answer);
    });
  }

 onClick(){
 //  event.stopPropagation();
   console.log(this.question);
   if (this.value === this.questions[this.questionIndex].answer){
    //let correct = questions[0].answer;
     alert("correct!");
   }
    else{
      alert ("incorrect");
    }
  console.log(this.questions, this.questionIndex);
    // this.question+1,
    // value
//  console.log(answer);
//    return false;
//  }

}
}


 interface Question{
   id:number,
   title:string,
   body:string
 }
   

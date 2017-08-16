import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
//import {HttpHeaders} from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';

@Injectable()
export class DataService {

  // constructor(public http:Http) { 
  //   console.log('dataservice connected');
  // }

  constructor(public http:Http) { 
    console.log('dataservice connected');

  }
  getQuestions(){
   return this.http.get('http://localhost3001/api/questions')
    .map(res =>res.json())

    //.catch(this.handleError);
    
  }

}

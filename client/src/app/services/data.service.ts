import { Injectable } from '@angular/core';
import {Http, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
//import {HttpHeaders} from '@angular/common/http';
import { Headers } from '@angular/http';

@Injectable()
export class DataService {

  constructor(public http:Http) { 
    console.log('dataservice connected');

  }
  getQuestions(){
      let url ='http://localhost3001/api/questions'
    return this.http.get(url)
    .map(res =>res.json());

    //.catch(this.handleError);
    
  }

}

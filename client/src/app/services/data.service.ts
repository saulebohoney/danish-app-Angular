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
  let headers = new Headers();
headers.append('Authorization', btoa("bearer ya29.GluhBF_kP0ocAOgR4oay77PbyIutjxLbQGp2V-ENVkxVVD1Yh4hqsXaKQXRxmfpBAziGWDnVsfVc6EuHXyHm-ZwS8l6MzP2JbCTX6gPkXvYWnjTW3p1LSjP9mOKZ"))
 
let opts = new RequestOptions();
opts.headers = headers;

   return this.http.get(url)
    .map(res =>res.json());

    //.catch(this.handleError);
    
  }

}

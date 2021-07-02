import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private url:string='assets/data/';

  private globalUrl  = 'https://bked.aieducator.com/';

  constructor(private http : HttpClient ) { }

  getAssignmentData(){
    return this.http.get<Config>(this.url+'assignment.json');
  }
  getMcqData(){
    return this.http.get<Config>(this.url+'mcq.json');
  }
}

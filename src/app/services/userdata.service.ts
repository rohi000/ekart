import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(private http : HttpClient) { }
  user(id:any)
  { 
    let endPoints = id +"/address";
    return this.http.get("http://localhost:5000/"+ endPoints)
  }
  saveuser(data:any,id:any)
  { 
    let endPoints = id +"/address/add";
    return this.http.post("http://localhost:5000/"+ endPoints ,data);
  }
}

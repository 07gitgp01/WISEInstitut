import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/users.model';

@Injectable({
  providedIn: 'root'
})
export class DataAccessService {
  
    url='http://localhost:3000/register';
  
    constructor(private http: HttpClient){}
  
    getRegisters(){
      return this.http.get(this.url);
    }
  
    addRegister1(value: User): void{
      let val = value;
      let body = {
        firstName : value.firstName,
        lastName : value.lastName,
        gender : value.gender,
        birthDate : value.birthDate,
        login : value.login,
        password : value.password,
        companyName : value.companyName,
      }
    
      console.log('submit value since the service :', body);
      this.http.post(this.url, body).subscribe((res)=>{
      console.log('res dans services',res)});
    }
    

    addRegister(user: any):void{
      console.log('register in service',user)
      this.http.post(`http://127.0.0.1:3000/register`,user).subscribe((res)=>{
        console.log('res dans services',res);
      });
      
    }
}

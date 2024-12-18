import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  url='http://localhost:3000/contact';

  constructor(private http: HttpClient){}

  getContacts(){
    return this.http.get(this.url);
  }

  addContact(value: any): Observable<any>{
    let body = {
      firstName : value.firstName,
      lastName : value.lastName,
      email : value.email,
      company : value.company,
      phone : parseInt(value.phone),

    }
    
    return this.http.post(this.url, body);
  }
}

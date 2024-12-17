import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'PAUL BOSS Univers';
  url='http://localhost:3000/contact';
  public contacts: any;

  constructor(private http: HttpClient){}
  ngOnInit(): void {
    this.http.get(this.url)
      .subscribe(
        (data) => {this.contacts = data},
        err => console.log(err)
      )
  }
}

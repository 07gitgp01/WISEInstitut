import { Component, OnInit } from '@angular/core';
import { ContactsService } from './services/contacts.service';
import { Observable, observeOn, throwError } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  background = '#f5f6fa';
 ngOnInit(): void {
   
 }
}

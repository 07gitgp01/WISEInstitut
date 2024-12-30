import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataAccessService } from 'src/app/shared/services/data-access.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public registers: any;
  constructor(private dataAccess: DataAccessService){}

  ngOnInit(): void {
    
  }

  loginForm: FormGroup = new FormGroup({
    login: new FormControl(''),
    password: new FormControl(''),
  })

  loginSubmit(value: any){
    const data = this.dataAccess.getRegisters();
    
  }

}

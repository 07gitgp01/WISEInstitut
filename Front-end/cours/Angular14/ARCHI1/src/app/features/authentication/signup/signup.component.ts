import { Component } from '@angular/core';
import { DataAccessService } from 'src/app/shared/services/data-access.service';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from 'src/app/shared/models/users.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  registerData : FormGroup = new FormGroup({
      firstName: new FormControl(''),
      lastName:  new FormControl(''),
      gender:  new FormControl(''),
      birthDate: new FormControl(''),
      login: new FormControl(''),
      password: new FormControl(''),
      confpassword: new FormControl(''),
      companyName: new FormControl('')
  })
  
    constructor(private dataAccessService: DataAccessService){}
  
    ngOnInit(): void {
      
    }
  
    submitForm(){
      const userRegisterData : User = {
        firstName: this.registerData.get('firstName')?.value,
        lastName:  this.registerData.get('lastName')?.value,
        gender:  this.registerData.get('gender')?.value,
        birthDate: this.registerData.get('birthDate')?.value,
        login: this.registerData.get('login')?.value,
        password: this.registerData.get('password')?.value,
        confpassword:this.registerData.get('confpassword')?.value,
        companyName: this.registerData.get('companyName')?.value
      }
      console.log('submit values: ', userRegisterData)
      this.dataAccessService.addRegister(userRegisterData)
    }

}

import { Component } from '@angular/core';
import { User } from 'src/app/shared/models/users.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  user: User = {
    firstName: '',
    lastName: '',
    gender: '',
    birthDate: new Date(),
    login: '',
    password: '',
    companyName: ''
  };

  submitForm() {
    console.log('Form Submitted:', this.user);
  }

}

import { Component } from '@angular/core';
import { DataAccessService } from 'src/app/shared/services/data-access.service';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from 'src/app/shared/models/users.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public registers: any;

  ngOnInit(): void {
    this.getRegisters();
    console.log(this.registers);

  }

  getRegisters(){
    this.dataAccessService.getRegisters()
      .subscribe(
        (data) => {this.registers = data; console.log (this.registers);},
        err => console.log(err)
      )
  }
  

  constructor(private dataAccessService: DataAccessService){}

  

}


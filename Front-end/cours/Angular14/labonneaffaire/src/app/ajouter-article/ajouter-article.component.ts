import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl } from '@angular/forms';

@Component({
  selector: 'app-ajouter-article',
  templateUrl: './ajouter-article.component.html',
  styleUrls: ['./ajouter-article.component.css']
})
export class AjouterArticleComponent implements OnInit {
  titleToAdd= new FormControl('');
  priceToAdd= new FormControl('');
  constructor(){}
  ngOnInit(): void {
    
  }

    onSubmit(form: NgForm){
      const newTitle= this.titleToAdd.value;
      const newPrice= this.priceToAdd.value;
      console.log("new tilte : " + newTitle);
      console.log("new price : " + newPrice);
    }
}

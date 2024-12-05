import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ajouter-article',
  templateUrl: './ajouter-article.component.html',
  styleUrls: ['./ajouter-article.component.css']
})
export class AjouterArticleComponent implements OnInit {
  titleToAdd: string= "";
  priceToAdd: string= "";
  constructor(){}
  ngOnInit(): void {
    
  }

    onSubmit(form: NgForm){
      const newTitle= this.titleToAdd;
      const newPrice= this.priceToAdd;
      console.log("new tilte : " + newTitle);
      console.log("new price : " + newPrice);
    }
}

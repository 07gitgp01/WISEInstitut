import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticleComponent } from "./article/article.component";
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'labonneaffaire';
  prix1: number = 12;
  prix2: number = 23;
  prix3: number = 9;
  message: string= "";
  liste;
  

  onAffiche(arg: string){
    return this.message= "Merci d'avoir voté pour l'article: " + arg;
  }

    
  constructor(private dataService:DataService){}
  ngOnInit(): void {
    this.liste=this.dataService.listeArticles;
  }
}

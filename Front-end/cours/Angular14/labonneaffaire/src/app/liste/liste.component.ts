import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit{
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

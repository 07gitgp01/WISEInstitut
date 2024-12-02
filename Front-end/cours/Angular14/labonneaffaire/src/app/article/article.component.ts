import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit{

  // String interpolation display
  titreArticle: string = "Titre de l'article";
  prixArticle: number = 12;

  // Property biding on image "src"&"alt"
  textAltImg: string = "Titre alternative de l'image";
  urlImg: string = "https://via.placeholder.com/400x250";

  // Event biding use
  totalNbrLike: number = 0;

  // two way biding
  comment: string = "Ceci est une commentaire";

  constructor(){}

  ngOnInit(): void {

  }

  onLike(){
    this.totalNbrLike++;
  }
}

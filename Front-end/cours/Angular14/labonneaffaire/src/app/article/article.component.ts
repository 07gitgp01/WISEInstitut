import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit{

// String interpolation display
  // titreArticle: string = "Titre de l'article";
  // prixArticle: number = 12;

//Transfert de données du component parent au fils
  @Input() titreArticle: string= "";
  @Input() prixArticle: number= 0;

  @Input() description: string= "";
  @Input() urlImg: string= "";
  @Input() textAltImg: string= "";
  @Input() dispo: boolean;
  @Input() idArticle:number;
  jaime: boolean = true;


//Transfert de données du component fils au parent  
  @Output() info = new EventEmitter<string>();  

// Property biding on image "src"&"alt"
  // textAltImg: string = "Titre alternative de l'image";
  // urlImg: string = "https://via.placeholder.com/400x250";

// Event biding use
  totalNbrLike: number = 0;

// two way biding
  comment: string = "Ceci est une commentaire";

  constructor(){}

  ngOnInit(): void {

  }

  onLike(){
    if(this.jaime === true){
      this.totalNbrLike++;
      this.jaime = false;
    }else{
      this.totalNbrLike--;
      this.jaime = true;
    }
    this.info.emit(this.titreArticle);
  }

  getColor(){
    if(this.dispo === true){
      return "green";
    }else{
      return "red";
    }
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  listeArticles = [
    {
      id: 1,
      titreArticle:"Vélo",
      prixArticle:80,
      description:"Un super velo tout terrain",
      urlImg:"../assets/images/velo.jpg",
      textAltImg:"Un vélo",
      dispo:false,
      info:"onAffiche($event)"
    },
    {
      id: 2,
      titreArticle:"TV",
      prixArticle: 159,
      description:"Une superbe télé à haute résolution",
      urlImg:"../assets/images/TV.jpg",
      textAltImg:"Un Télévision",
      dispo:true,
      info:"onAffiche($event)"
    },
    {
      id: 3,
      titreArticle:"Jouet" ,
      prixArticle:300 ,
      description:"Un jouet de Jinx dans la serie animée ARCANE",
      urlImg:"../assets/images/VI.jpg",
      textAltImg:"Un Jouet",
      dispo:true,
      info:"onAffiche($event)"
    }
  ]

  constructor() { }
}

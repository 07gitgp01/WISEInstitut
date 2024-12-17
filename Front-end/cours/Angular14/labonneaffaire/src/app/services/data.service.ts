import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // listeArticles = [
  //   {
  //     id: 1,
  //     titreArticle:"Vélo",
  //     prixArticle:80,
  //     description:"Un super velo tout terrain",
  //     urlImg:"../assets/images/velo.jpg",
  //     textAltImg:"Un vélo",
  //     dispo:false,
  //     info:"onAffiche($event)"
  //   },
  //   {
  //     id: 2,
  //     titreArticle:"TV",
  //     prixArticle: 159,
  //     description:"Une superbe télé à haute résolution",
  //     urlImg:"../assets/images/TV.jpg",
  //     textAltImg:"Une Télévision",
  //     dispo:true,
  //     info:"onAffiche($event)"
  //   },
  //   {
  //     id: 3,
  //     titreArticle:"Jouet" ,
  //     prixArticle:300 ,
  //     description:"Un jouet de Jinx dans la serie animée ARCANE",
  //     urlImg:"../assets/images/VI.jpg",
  //     textAltImg:"Un Jouet",
  //     dispo:true,
  //     info:"onAffiche($event)"
  //   }
  // ]
  listeArticles: any = [];
  constructor(private httpClient: HttpClient) { }

  getArticle(id: number): Observable<any> {
    return this.getListFromServer().pipe(
      map(articles => {
        const article = articles.find(a => a.id === id);
        // console.log('recup_Article : ', article);
        return article;
      })
  );
  }

  getListFromServer(){
    // return this.httpClient.get<any[]>("https://labonneaffaire-ec69f-default-rtdb.europe-west1.firebasedatabase.app/data.json")
    return this.httpClient.get<any[]>("https://liste-articles-tuto-angular-default-rtdb.firebaseio.com/data.json")
  }
  
}

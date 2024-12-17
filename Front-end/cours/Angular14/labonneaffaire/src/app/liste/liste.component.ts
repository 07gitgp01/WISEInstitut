import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../services/data.service';
import { interval, Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators';


@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit, OnDestroy{
  message: string= "";
  liste: any = [];
  compteurSubscription: Subscription;
  secondes;
  

  onAffiche(arg: string){
    return this.message= "Merci d'avoir voté pour l'article: " + arg;
  }

    
  constructor(private dataService:DataService){}
  ngOnInit(): void {
    // this.liste=this.dataService.listeArticles;
    this.getList();
    
    const compteur = interval(1000).pipe(
      filter(value => value%2 === 0),
      map(value => value%2 === 0 ?
        `${value} est paire` : 
        `${value} est impaire`
      )
    );

    this.compteurSubscription = compteur.subscribe({
      next: (v) => this.secondes = v,
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    })
  }

  getList(){
    this.dataService.getListFromServer().subscribe(liste => {
      this.liste = liste;
      console.log(liste);
    });
  }

  ngOnDestroy(): void {
    this.compteurSubscription.unsubscribe();
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { interval, Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, OnDestroy {
  constructor(private route:ActivatedRoute, private dataservice: DataService){}
  detailsId: Number;
  detailContent: any;
  subsc: Subscription;

  ngOnInit(): void {
    this.detailsId= Number(this.route.snapshot.paramMap.get('id'));
    console.log(this.detailsId);

    this.detailContent = this.dataservice.listeArticles.find(
      article => article.id === this.detailsId
    );

    if (this.detailContent) {
      console.log('Article trouvé :', this.detailContent);
    } else {
      console.error('Erreur : article non trouvé !');
    }
    

  }

  ngOnDestroy(): void {
    
  }
}

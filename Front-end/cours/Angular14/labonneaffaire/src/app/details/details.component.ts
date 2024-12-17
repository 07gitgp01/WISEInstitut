import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { interval, Observable, Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, OnDestroy {
  constructor(private route:ActivatedRoute, private dataservice: DataService){}
  detailsId: number;
  detailContent: any;
  subsc: Subscription;

  ngOnInit(): void {
    this.detailsId= Number(this.route.snapshot.paramMap.get('id'));
    console.log(this.detailsId);

    this.dataservice.getArticle(this.detailsId).subscribe(article => {

      if (article) {
        this.detailContent = article;
        console.log('Article trouvé :', article);
      } else {
        console.error('Erreur : article non trouvé !', this.detailContent);
      }
    })
    


  }

  ngOnDestroy(): void {
    
  }
}

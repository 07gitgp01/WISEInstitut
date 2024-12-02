import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticleComponent } from "./article/article.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'labonneaffaire';
}

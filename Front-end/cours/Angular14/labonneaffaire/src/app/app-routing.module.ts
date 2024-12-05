import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeComponent } from './liste/liste.component';
import { DetailsComponent } from './details/details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AjouterArticleComponent } from './ajouter-article/ajouter-article.component';

const routes: Routes = [
  {path:"", component: ListeComponent},
  {path:"liste", redirectTo:""},
  {path:"details/:id", component: DetailsComponent},
  {path:"ajout", component: AjouterArticleComponent},
  {path:"**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

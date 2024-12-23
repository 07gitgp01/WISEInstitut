import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './features/layout/layout.component';

const routes: Routes = [
  // {path:"login", loadChildren() => import ('./features/authentication/authentication.module') }
  {path: 'archi-app/auth', loadChildren: () => import('./features/authentication/authentication.module').then(m => m.AuthenticationModule)},
  {
    path: "archi-app", component: LayoutComponent,  children: [
      {
     // path: "", canActivateChild: [LoginGuard], children: [
      path: "", children: [
        { path: "", loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
        { path: "client", loadChildren: () => import('./features/client/client.module').then(m => m.ClientModule) }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

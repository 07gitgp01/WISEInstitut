import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  header = 'CRM';
  titre = 'Gestion des relations clients';
  textAlign = 'center';
}

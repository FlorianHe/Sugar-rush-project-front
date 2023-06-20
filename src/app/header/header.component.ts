import { Component } from '@angular/core';
import { APP_ROUTES } from '../shared/globals/routes';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public APP_ROUTES = APP_ROUTES;
}

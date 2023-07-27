import { Component, Input } from '@angular/core';
import { APP_ROUTES } from 'src/app/shared/globals/routes';
import { Category } from 'src/app/shared/interfaces/category';

@Component({
  selector: 'app-ariane',
  templateUrl: './ariane.component.html',
  styleUrls: ['./ariane.component.scss']
})
export class ArianeComponent {
  @Input()
  public category!: Category;
  public APP_ROUTES=APP_ROUTES;
}

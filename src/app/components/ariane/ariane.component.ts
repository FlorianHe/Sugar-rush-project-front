import { Component, Input } from '@angular/core';
import { Category } from 'src/app/shared/interfaces/category';

@Component({
  selector: 'app-ariane',
  templateUrl: './ariane.component.html',
  styleUrls: ['./ariane.component.scss']
})
export class ArianeComponent {
  @Input()
  public color!: string;
  @Input()
  public name!: string;
}

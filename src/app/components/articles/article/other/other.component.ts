import { Component, Input } from '@angular/core';
import { Article } from 'src/app/shared/interfaces/article';

@Component({
  selector: 'app-article-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.scss']
})
export class OtherComponent {

  @Input()
  article!: Article;

}

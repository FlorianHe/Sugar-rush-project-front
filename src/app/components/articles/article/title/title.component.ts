import { Component, Input } from '@angular/core';
import { Article } from 'src/app/shared/interfaces/article';


@Component({
  selector: 'app-article-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {

  @Input()
  article!: Article;

}

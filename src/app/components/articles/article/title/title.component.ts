import { Component } from '@angular/core';
import { Article } from 'src/app/shared/interfaces/article';
import { ARTICLE } from 'src/app/shared/datas/article';
@Component({
  selector: 'app-article-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {
  article: Article = ARTICLE;

}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-article-type-main',
  templateUrl: './article-type-main.component.html',
  styleUrls: ['./article-type-main.component.scss']
})
export class ArticleTypeMainComponent {
  @Input() article!:any
}

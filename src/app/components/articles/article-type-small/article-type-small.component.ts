import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-article-type-small',
  templateUrl: './article-type-small.component.html',
  styleUrls: ['./article-type-small.component.scss']
})
export class ArticleTypeSmallComponent {
  @Input() article!:any
}

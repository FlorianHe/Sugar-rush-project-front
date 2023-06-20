import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-article-type-side',
  templateUrl: './article-type-side.component.html',
  styleUrls: ['./article-type-side.component.scss']
})
export class ArticleTypeSideComponent {

  @Input() article!:any
}

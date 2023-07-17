import { Component, Input, OnInit } from '@angular/core';

import { Article } from 'src/app/shared/interfaces/article';

@Component({
  selector: 'app-article-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {

  @Input()
  article!: Article;
  

}

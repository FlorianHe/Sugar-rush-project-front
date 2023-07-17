import { Component, Input, OnInit } from '@angular/core';

import { ParagraphService } from 'src/app/services/paragraph-api.service';
import { Article } from 'src/app/shared/interfaces/article';
import { Paragraph } from 'src/app/shared/interfaces/paragraph';

@Component({
  selector: 'app-article-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {

  @Input()
  article!: Article;
  _paragraphs!: Paragraph[];


  constructor(private paragraphService: ParagraphService) { }

  ngOnInit(): void {
    this.getParagraphsByArticle();

  }

  getParagraphsByArticle(): void {
    this.paragraphService.getParagraphsByArticle(this.article.id).subscribe((paragraphs) => {
      this._paragraphs = paragraphs;

    });
  }


}

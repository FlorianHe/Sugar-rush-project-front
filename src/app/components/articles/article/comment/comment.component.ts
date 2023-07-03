import { Component, Input } from '@angular/core';
import { Article } from 'src/app/shared/interfaces/article';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {

  @Input()
  article!: Article;

}

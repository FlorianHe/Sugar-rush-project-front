import { Component, Input } from '@angular/core';
import { CommentService } from 'src/app/services/comment-api.service';
import { Comment } from 'src/app/shared/interfaces/comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {

  @Input()
  comment!: Comment;

  deleteComment(comment: Comment): void {
    
    }
}

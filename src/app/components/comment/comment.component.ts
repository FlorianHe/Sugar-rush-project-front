import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommentService } from 'src/app/services/comment-api.service';
import { UserService } from 'src/app/services/user.service';
import { Comment } from 'src/app/shared/interfaces/comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {

  @Input()
  comment!: Comment;

  @Input()
  categorySlug!: string;

  currentUser = this.userService.getUser();

  @Output()
  commentDeleted = new EventEmitter<Boolean>();

  constructor(private commentService: CommentService, private userService: UserService) {}

  deleteComment(comment: Comment): void {
    this.commentService.deleteComment(comment.id).subscribe(() => {
      this.commentDeleted.emit(true);
    });
  }

  getNameOrUsername(): string {
    if ((this.comment.user.firstName != "") && (this.comment.user.lastName != "")) {
      return this.comment.user.firstName + " " + this.comment.user.lastName;
    }
    return this.comment.user.userStringName as string;
  }
}

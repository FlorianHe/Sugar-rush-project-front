import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ConnectionComponent } from 'src/app/components/user/connection/connection.component';
import { CommentService } from 'src/app/services/comment-api.service';
import { UserService } from 'src/app/services/user.service';
import { Article } from 'src/app/shared/interfaces/article';
import { Comment } from 'src/app/shared/interfaces/comment';
import { User } from 'src/app/shared/interfaces/user';

@Component({
  selector: 'app-article-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class ArticleCommentComponent implements OnInit {

  @Input()
  article!: Article;

  connectionStatus = this.userService.user;

  _comments!: Comment[];


  constructor(private commentService: CommentService, private userService: UserService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getCommentsByArticle();
  }

  getCommentsByArticle(): void {
    this.commentService.getCommentsByArticle(this.article.id).subscribe(comments => {
      this._comments = comments;
    });
  }

  createComment(form: NgForm): void {
    const loggedInUserString = this.userService.getUser();
    if (loggedInUserString) {
      const comment: Comment = {
        id: 0,
        articleId: this.article.id,
        content: form.value.content,
        user: { id: loggedInUserString.id }
      };

      this.commentService.createComment(comment).subscribe(
        (createdComment) => {
          this.getCommentsByArticle();
          form.reset();
        },
        (error) => {
          // Handle the error message returned by the service
          console.error('Error creating comment:', error);
        });
    }
  }



  updateComment(comment: Comment): void {
    this.commentService.updateComment(comment.id, comment).subscribe(updatedComment => {
      this._comments.forEach((c, index) => {
        if (c.id === updatedComment.id) {
          this._comments[index] = updatedComment;
        }
      });
    });
  }

  onCommentDeleted(commentDeleted: Boolean): void {
    if (commentDeleted) {
      this.getCommentsByArticle();
    }
  }

  openModal() {
    const dialogRef = this.dialog.open(ConnectionComponent, {
      panelClass: 'modal-login',
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}

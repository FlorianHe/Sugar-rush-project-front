import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommentService } from 'src/app/services/comment-api.service';
import { COMMENT } from 'src/app/shared/datas/comment';
import { Comment } from 'src/app/shared/interfaces/comment';

@Component({
  selector: 'app-article-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class ArticleCommentComponent implements OnInit {

  @Input()
  id!: number;


  _comments: Comment[] = COMMENT;


  constructor(private commentService: CommentService) {}

  ngOnInit(): void {
    //this.getCommentsByArticle();
  }

  getCommentsByArticle(): void {
    this.commentService.getCommentsByArticle(this.id).subscribe(comments => {
      this._comments = comments;
    });
  }

  createComment(form: NgForm): void {
    const comment: Comment = {
      id: 0,
      articleId: this.id,
      content: form.value.content,
      creation_date: new Date(),
      user: {
        id: 1,
        firstname: 'Florian',
        lastname: 'Helaine',
      }
    };
    this._comments.push(comment);
    this.commentService.createComment(comment).subscribe(createdComment => {
      this._comments.push(createdComment);
      form.reset();
    });
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

}

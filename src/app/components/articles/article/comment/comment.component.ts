import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommentService } from 'src/app/services/comment-api.service';
import { COMMENT } from 'src/app/shared/datas/comment';
import { Article } from 'src/app/shared/interfaces/article';
import { Comment } from 'src/app/shared/interfaces/comment';

@Component({
  selector: 'app-article-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class ArticleCommentComponent implements OnInit {

  @Input()
  article! : Article;


  _comments!: Comment[];


  constructor(private commentService: CommentService) {}

  ngOnInit(): void {
    this.getCommentsByArticle();
  }

  getCommentsByArticle(): void {
    this.commentService.getCommentsByArticle(this.article.id).subscribe(comments => {
      this._comments = comments;
      for (let i = 0; i < this._comments.length; i++) {
        this._comments[i].user = { id: 1, firstname: 'Florian', lastname: 'Helaine' };
      }
    });
  }

  createComment(form: NgForm): void {
    const comment: Comment = {
      id: 0,
      articleId: this.article.id,
      content: form.value.content,
      creation_date: new Date(),
      user: {
        id: 1,
        firstname: 'Florian',
        lastname: 'Helaine',
      }
    };
    this.commentService.createComment(comment).subscribe(createdComment => {
      createdComment.user = { id: 2, firstname: 'Alexandre', lastname: 'Boutemy' };
      this.getCommentsByArticle();
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

  onCommentDeleted(commentDeleted : Boolean): void {
    if (commentDeleted) {
      this.getCommentsByArticle();
    }
  }
}

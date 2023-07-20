import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../shared/interfaces/comment';
import { SUGAR_RUSH_API } from '../shared/globals/api';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) {}

  getCommentsByArticle(articleId: number): Observable<Comment[]> {
    const url = `${SUGAR_RUSH_API.baseArticles}/${articleId}/comments`;
    return this.http.get<Comment[]>(url);
  }

  createComment(comment: Comment): Observable<Comment> {
    const url = `${SUGAR_RUSH_API.baseArticles}/${comment.articleId}/comments`;
    return this.http.post<Comment>(url, comment);
  }

  updateComment(commentId: number, updatedComment: Comment): Observable<Comment> {
    const url = `${SUGAR_RUSH_API.baseComments}/${commentId}`;
    return this.http.put<Comment>(url, updatedComment);
  }

  deleteComment(commentId: number): Observable<void> {
    const url = `${SUGAR_RUSH_API.baseComments}/${commentId}`;
    return this.http.delete<void>(url);
  }
}

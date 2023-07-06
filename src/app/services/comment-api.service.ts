import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../shared/interfaces/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getCommentsByArticle(articleId: number): Observable<Comment[]> {
    const url = `${this.apiUrl}/articles/${articleId}/comments`;
    return this.http.get<Comment[]>(url);
  }

  createComment(comment: Comment): Observable<Comment> {
    const url = `${this.apiUrl}/comments`;
    return this.http.post<Comment>(url, comment);
  }

  updateComment(commentId: number, updatedComment: Comment): Observable<Comment> {
    const url = `${this.apiUrl}/comments/${commentId}`;
    return this.http.put<Comment>(url, updatedComment);
  }

  deleteComment(commentId: number): Observable<void> {
    const url = `${this.apiUrl}/comments/${commentId}`;
    return this.http.delete<void>(url);
  }
}

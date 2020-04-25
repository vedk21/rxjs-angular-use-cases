import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post, Comment } from '../models/post.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetPostsService {

  baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    const url = `${this.baseUrl}/posts`;
    return this.http.get<Post[]>(url);
  }

  getPost(id: number): Observable<Post> {
    const url = `${this.baseUrl}/posts/${id}`;
    return this.http.get<Post>(url);
  }

  getComments(id: number): Observable<Comment[]> {
    const url = `${this.baseUrl}/posts/${id}/comments`;
    return this.http.get<Comment[]>(url);
  }

  getComment(postId: number, id: number): Observable<Comment> {
    const url = `${this.baseUrl}/posts/${postId}/comments/${id}`;
    return this.http.get<Comment>(url);
  }
}

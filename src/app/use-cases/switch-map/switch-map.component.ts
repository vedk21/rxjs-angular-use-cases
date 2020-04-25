import { Component, OnInit } from '@angular/core';
import { GetPostsService } from 'src/app/services/get-posts.service';
import { Observable, of } from 'rxjs';
import { switchMap, map, filter } from 'rxjs/operators';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss']
})
export class SwitchMapComponent implements OnInit {

  // posts
  posts$: Observable<Post[]>;
  post: Post;

  constructor(private getPostsService: GetPostsService) { }

  ngOnInit(): void {
  }

  getPosts() {
    this.posts$ = this.getPostsService.getPosts();
  }

  getPost(id: number) {
    this.getPostsService.getPost(id).pipe(
      switchMap((post: Post) => {
        post.comments$ = this.getPostsService.getComments(post.id);
        return of(post);
      })
    ).subscribe((post: Post) => this.post = post);
  }

}

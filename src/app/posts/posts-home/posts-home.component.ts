import {Component, OnInit} from '@angular/core';
import {PostService} from '../../post.service';
import {Post} from '../../core/Post';

@Component({
  selector: 'app-posts-home',
  templateUrl: './posts-home.component.html'
})
export class PostsHomeComponent implements OnInit {
  posts: Post[];

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.fetchPosts();
  }

  addPost(post: Post) {
    this.postService.save(post);
  }

  private fetchPosts() {
    return this.postService.fetchAll().subscribe(posts => {
      return this.posts = posts;
    });
  }
}

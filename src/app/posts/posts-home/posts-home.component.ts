import {Component} from '@angular/core';
import {PostService} from '../../post.service';
import {Post} from '../../core/Post';

@Component({
  selector: 'app-posts-home',
  templateUrl: './posts-home.component.html'
})
export class PostsHomeComponent {
  constructor(private postService: PostService) {
  }

  get posts() {
    return this.postService.fetchAll();
  }

  addPost(post: Post) {
    this.postService.save(post);
  }
}

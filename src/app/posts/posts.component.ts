import {Component, Input} from '@angular/core';
import {Post} from '../core/Post';
import {PostService} from '../post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html'
})
export class PostsComponent {
  @Input() posts: Post[];

  constructor(private postService: PostService) {
  }

  increaseKissedCount(post: Post) {
    this.postService.kiss(post.id);
  }
}

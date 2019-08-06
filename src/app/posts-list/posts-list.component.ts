import {Component, Input} from '@angular/core';
import {Post} from '../core/Post';
import {PostService} from '../post.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html'
})
export class PostsListComponent {
  @Input() posts: Post[];

  constructor(private postService: PostService) {
  }

  increaseKissedCount(post: Post) {
    this.postService.kiss(post.id);
  }
}

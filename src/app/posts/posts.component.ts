import {Component, Input} from '@angular/core';
import {Post} from '../core/Post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  @Input() posts: Post[];

  kiss(post: Post) {
    if (!!post.kissed) {
      post.kissed++;
    } else {
      post.kissed = 1;
    }
  }
}

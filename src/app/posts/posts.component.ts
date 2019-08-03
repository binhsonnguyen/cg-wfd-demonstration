import {Component} from '@angular/core';
import {Post} from '../core/Post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html'
})
export class PostsComponent {
  private posts: Post[];
}

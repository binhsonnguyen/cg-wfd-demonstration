import {Component} from '@angular/core';
import {Post} from './core/Post';
import {PostService} from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(private postService: PostService) {
  }

  get posts() {
    return this.postService.fetchAll();
  }

  addPost(post: Post) {
    this.postService.save(post);
  }
}

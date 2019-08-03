import {Component} from '@angular/core';
import {POSTS} from './core/POSTS';
import {Post} from './core/Post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  editingPost = new Post();

  posts = POSTS;

  addPost() {
    this.posts.push(this.editingPost);
    this.editingPost = new Post();
  }
}

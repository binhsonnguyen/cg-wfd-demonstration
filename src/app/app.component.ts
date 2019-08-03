import {Component, OnInit} from '@angular/core';
import {POSTS} from './core/POSTS';
import {Post} from './core/Post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  editingPost: Post;
  posts: Post[];

  ngOnInit(): void {
    this.editingPost = new Post();
    this.posts = POSTS;
  }

  addPost() {
    this.posts.push(this.editingPost);
    this.editingPost = new Post();
  }

}

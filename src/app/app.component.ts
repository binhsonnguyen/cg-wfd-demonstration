import {Component, OnInit} from '@angular/core';
import {POSTS} from './core/POSTS';
import {Post} from './core/Post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  posts: Post[];

  ngOnInit(): void {
    this.posts = POSTS;
  }
}

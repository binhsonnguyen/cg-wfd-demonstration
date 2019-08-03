import {Component, OnInit} from '@angular/core';
import {Post} from '../core/Post';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html'
})
export class PostCreateComponent implements OnInit {
  editingPost: Post;

  ngOnInit() {
    this.editingPost = new Post();
  }
}

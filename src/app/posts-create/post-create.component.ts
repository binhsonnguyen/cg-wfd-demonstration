import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Post} from '../core/Post';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html'
})
export class PostCreateComponent implements OnInit {
  editingPost: Post;
  @Output() postEmit: EventEmitter<Post> = new EventEmitter<Post>();

  ngOnInit() {
    this.editingPost = new Post();
  }

  emitPost() {
    this.postEmit.emit(this.editingPost);
  }
}

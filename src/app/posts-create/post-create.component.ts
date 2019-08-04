import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Post} from '../core/Post';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  editingPost: Post;
  @Output() postEmit: EventEmitter<Post> = new EventEmitter<Post>();

  ngOnInit() {
    this.refresh();
  }

  emitPost() {
    this.postEmit.emit(this.editingPost);
    this.refresh();
  }

  private refresh() {
    this.editingPost = new Post();
  }

}

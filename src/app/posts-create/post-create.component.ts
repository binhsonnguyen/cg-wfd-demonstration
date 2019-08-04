import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Post} from '../core/Post';
import {NgForm} from '@angular/forms';

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

  emitPostIfValid(editingForm: NgForm) {
    if (editingForm.valid) {
      this.emitPost();
    }
  }

  private refresh() {
    this.editingPost = new Post();
  }

  private emitPost() {
    this.postEmit.emit(this.editingPost);
    this.refresh();
  }
}

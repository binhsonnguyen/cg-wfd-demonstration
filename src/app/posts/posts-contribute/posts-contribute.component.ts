import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Post} from '../../core/Post';

@Component({
  selector: 'app-posts-contribute',
  templateUrl: './posts-contribute.component.html'
})
export class PostsContributeComponent implements OnInit {
  editingForm: FormGroup;
  editingPost: Post;
  submitted = false;
  @Output() postEmit: EventEmitter<Post> = new EventEmitter<Post>();

  get fields() {
    return this.editingForm.controls;
  }

  ngOnInit() {
    this.editingForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(6)]),
      url: new FormControl('', [Validators.required, Validators.minLength(6)]),
      sworn: new FormControl(false, [Validators.required])
    });
    this.refresh();
  }

  onSubmit() {
    this.submitted = true;

    if (this.editingForm.invalid) {
      return;
    }

    this.emitPost();
  }

  private emitPost() {
    this.postEmit.emit(this.editingPost);
    this.refresh();
  }

  private refresh() {
    this.submitted = false;
    this.editingPost = new Post();
  }
}

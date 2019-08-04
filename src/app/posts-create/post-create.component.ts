import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Post} from '../core/Post';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
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

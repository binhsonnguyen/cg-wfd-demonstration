import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Post} from '../../core/Post';
import {PostService} from '../../post.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-posts-contribute',
  templateUrl: './posts-contribute.component.html'
})
export class PostsContributeComponent implements OnInit {
  editingForm: FormGroup;
  editingPost: Post;
  submitted = false;
  @Output() postEmit: EventEmitter<Post> = new EventEmitter<Post>();

  constructor(private postService: PostService, private router: Router) {
  }

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

    this.postService.save(this.editingPost);
    this.router.navigate(['news']);
    this.refresh();
  }

  private refresh() {
    this.submitted = false;
    this.editingPost = new Post();
    this.submitted = false;
    this.editingForm.markAsPristine();
    this.editingForm.markAsUntouched();
    this.editingForm.updateValueAndValidity();
  }
}

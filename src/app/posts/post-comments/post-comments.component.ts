import {Component, OnInit} from '@angular/core';
import {Post} from '../../core/Post';
import {PostService} from '../../post.service';

@Component({
  selector: 'app-post-comments',
  templateUrl: './post-comments.component.html'
})
export class PostCommentsComponent implements OnInit {
  post: Post;

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    const id = 0;
    this.post = this.postService.fetch(id);
  }

}

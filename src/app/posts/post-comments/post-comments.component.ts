import {Component, OnInit} from '@angular/core';
import {Post} from '../../core/Post';
import {PostService} from '../../post.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-post-comments',
  templateUrl: './post-comments.component.html'
})
export class PostCommentsComponent implements OnInit {
  post: Post;

  constructor(private postService: PostService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.post = this.postService.fetch(+id);
  }

}

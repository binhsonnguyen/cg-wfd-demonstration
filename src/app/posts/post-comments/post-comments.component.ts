import {Component, OnDestroy, OnInit} from '@angular/core';
import {Post} from '../../core/Post';
import {PostService} from '../../post.service';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-post-comments',
  templateUrl: './post-comments.component.html'
})
export class PostCommentsComponent implements OnInit, OnDestroy {
  post: Post;
  private routerParamMapSubscription: Subscription;

  constructor(private postService: PostService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.routerParamMapSubscription = this.activatedRoute.paramMap.subscribe(snapshotParams => {
      const id = snapshotParams.get('id');
      this.postService.fetch(+id).subscribe(post => {
        this.post = post;
      });
    });
  }

  ngOnDestroy(): void {
    this.routerParamMapSubscription.unsubscribe();
  }

  increaseKissedCount(post: Post) {
    this.postService.kiss(post.id);
  }
}

import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {PostsHomeComponent} from './posts/posts-home/posts-home.component';
import {PostCommentsComponent} from './posts/post-comments/post-comments.component';
import {PostsContributeComponent} from './posts/posts-contribute/posts-contribute.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: PostsHomeComponent
      },
      {
        path: 'news',
        component: PostsHomeComponent
      },
      {
        path: 'news/:id',
        component: PostCommentsComponent
      },
      {
        path: 'contrib',
        component: PostsContributeComponent
      }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

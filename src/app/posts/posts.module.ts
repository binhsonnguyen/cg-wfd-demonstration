import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostCommentsComponent} from './post-comments/post-comments.component';
import {PostsContributeComponent} from './posts-contribute/posts-contribute.component';
import {PostsHomeComponent} from './posts-home/posts-home.component';
import {PostsListComponent} from './posts-list/posts-list.component';

@NgModule({
  declarations: [
    PostCommentsComponent,
    PostsContributeComponent,
    PostsHomeComponent,
    PostsListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PostsModule {
}

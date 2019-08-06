import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostCommentsComponent} from './post-comments/post-comments.component';
import {PostsContributeComponent} from './posts-contribute/posts-contribute.component';
import {PostsHomeComponent} from './posts-home/posts-home.component';
import {PostsListComponent} from './posts-list/posts-list.component';
import {SharedModule} from '../shared/shared.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PostsRoutingModule} from './posts-routing.module';

@NgModule({
  declarations: [
    PostCommentsComponent,
    PostsContributeComponent,
    PostsHomeComponent,
    PostsListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    PostsRoutingModule
  ]
})
export class PostsModule {
}

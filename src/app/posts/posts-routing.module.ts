import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostCommentsComponent} from './post-comments/post-comments.component';

const routes: Routes = [
  {
    path: 'news/:id',
    component: PostCommentsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class PostsRoutingModule {
}

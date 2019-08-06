import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostsHomeComponent} from '../posts/posts-home/posts-home.component';
import {PostsContributeComponent} from '../posts/posts-contribute/posts-contribute.component';

const routes: Routes = [
  {
    path: '',
    component: PostsHomeComponent
  },
  {
    path: 'news',
    component: PostsHomeComponent
  },
  {
    path: 'contrib',
    component: PostsContributeComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class SharedRoutingModule {
}

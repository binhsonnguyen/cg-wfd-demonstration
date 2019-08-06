import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PostsListComponent} from './posts/posts-list/posts-list.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faKiss} from '@fortawesome/free-regular-svg-icons';
import {PostsHomeComponent} from './posts/posts-home/posts-home.component';
import {PostsContributeComponent} from './posts/posts-contribute/posts-contribute.component';
import {PostCommentsComponent} from './posts/post-comments/post-comments.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PostsListComponent,
    PostsHomeComponent,
    PostsContributeComponent,
    PostCommentsComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    library.add(faKiss);
  }
}

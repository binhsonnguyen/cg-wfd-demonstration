import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FooterComponent} from './shared/footer/footer.component';
import {HeaderComponent} from './shared/header/header.component';
import {PostsListComponent} from './posts/posts-list/posts-list.component';
import {PostCreateComponent} from './posts/posts-create/post-create.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faKiss} from '@fortawesome/free-regular-svg-icons';
import {KissletComponent} from './shared/kisslet/kisslet.component';
import {PostsHomeComponent} from './posts/posts-home/posts-home.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    PostsListComponent,
    PostCreateComponent,
    KissletComponent,
    PostsHomeComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: PostsHomeComponent
      }
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    library.add(faKiss);
  }
}

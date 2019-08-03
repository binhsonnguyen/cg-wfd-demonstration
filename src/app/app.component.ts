import {Component} from '@angular/core';
import {POSTS} from './POSTS';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  posts = POSTS;
}

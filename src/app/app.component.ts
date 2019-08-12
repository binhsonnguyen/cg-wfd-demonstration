import {Component} from '@angular/core';
import {ARTICLES} from './ARTICLES';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  articles = ARTICLES;

  editingArticle = {
    title: '',
    url: ''
  };

  addArticle() {
  }
}

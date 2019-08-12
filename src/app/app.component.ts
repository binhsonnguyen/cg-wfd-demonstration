import {Component} from '@angular/core';
import {ARTICLES} from './ARTICLES';
import {Article} from './Article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  articles: Article[] = ARTICLES;

  editingArticle: Article = new Article();

  addArticle() {
  }
}

import {Component, Inject} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  article = {
    title: 'The Evolution of Async JavaScript: From Callbacks, to Promises, to Async/Await',
    url: 'https://medium.freecodecamp.org/the-evolution-of-async-javascript-from-callbacks-to-promises-to-async-await-e73b047f2f40'
  };

  constructor(@Inject(DOCUMENT) private document) {
  }

  updateArticle() {
    this.article.title = this.document.getElementById('article-title').value;
    this.article.url = this.document.getElementById('article-url').value;
  }
}

import {Component} from '@angular/core';
import {ARTICLES} from './ARTICLES';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  articles = ARTICLES;

  article = {
    title: 'The Evolution of Async JavaScript: From Callbacks, to Promises, to Async/Await',
    url: 'https://medium.freecodecamp.org/the-evolution-of-async-javascript-from-callbacks-to-promises-to-async-await-e73b047f2f40'
  };
}

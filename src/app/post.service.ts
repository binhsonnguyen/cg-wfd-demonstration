import {Post} from './core/Post';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private autoIncreasementId = 0;
  private posts: Post[] = [
    {
      id: this.autoIncreasementId++,
      title: 'The Evolution of Async JavaScript: From Callbacks, to Promises, to Async/Await',
      url: 'https://medium.freecodecamp.org/the-evolution-of-async-javascript-from-callbacks-to-promises-to-async-await-e73b047f2f40',
      kissed: 1920
    },
    {
      id: this.autoIncreasementId++,
      title: 'Game of Life',
      url: 'https://thefullsnack.com/posts/game-of-life.html',
      kissed: 1280
    },
    {
      id: this.autoIncreasementId++,
      title: 'Nguyên tắc thiết kế REST API',
      url: 'https://medium.com/eway/nguyên-tắc-thiết-kế-rest-api-23add16968d7',
      kissed: 1024
    },
    {
      id: this.autoIncreasementId++,
      title: 'Why You Only Need to Test with 5 Users',
      url: 'https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/',
      kissed: 800
    },
    {
      id: this.autoIncreasementId++,
      title: 'Let’s Build A Web Server. Part 1.',
      url: 'https://ruslanspivak.com/lsbaws-part1/',
      kissed: 640
    }
  ];

  fetchAll(): Post[] {
    return this.posts;
  }

  save(post: Post) {
    post.id = this.autoIncreasementId++;
    this.posts.push(post);
  }

  kiss(id: number) {
  }
}

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
      kissed: 1920,
      comments: [
        {
          id: this.autoIncreasementId++,
          content: 'Good to consulting.',
          author: 'An Duong Vuong',
          kissed: 17
        },
        {
          id: this.autoIncreasementId++,
          content: 'So how the evolution of multi-shot bow?',
          author: 'My Chau',
          kissed: 11
        },
        {
          id: this.autoIncreasementId++,
          content: 'Greate question!',
          author: 'Trong Thuy',
          kissed: 3
        },
      ]
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

  fetch(id: number): Post {
    return this.posts.find(value => value.id === id);
  }

  save(post: Post) {
    post.id = this.autoIncreasementId++;
    this.posts.push(post);
  }

  kiss(id: number) {
    const origin = this.posts.find(value => value.id === id);
    if (!!origin) {
      if (!origin.kissed) {
        origin.kissed = 0;
      }
      origin.kissed++;
    }
  }
}

import {Post} from './core/Post';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private autoIncreasementId = 0;
  private posts: Post[];
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

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

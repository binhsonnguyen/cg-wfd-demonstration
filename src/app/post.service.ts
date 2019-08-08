import {Post} from './core/Post';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {Location} from '@angular/common';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private autoIncreasementId = 0;
  private posts: Post[];
  private apiUrl = environment.apiUrl;
  private postsResourceUrl = Location.joinWithSlash(this.apiUrl, 'posts');

  constructor(private http: HttpClient) {
  }

  fetchAll(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsResourceUrl);
  }

  fetch(id: number): Observable<Post> {
    const url = Location.joinWithSlash(this.postsResourceUrl, id + '');
    return this.http.get<Post>(url);
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

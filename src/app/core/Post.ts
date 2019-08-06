import {Comment} from './Comment';

export class Post {
  id?: number;
  title: string;
  url: string;
  kissed?: number;
  comments?: Comment[];
}

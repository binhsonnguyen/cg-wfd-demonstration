import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Post} from '../core/Post';

@Component({
  selector: 'app-kisslet',
  templateUrl: './kisslet.component.html',
  styleUrls: ['./kisslet.component.css']
})
export class KissletComponent {
  @Input()
  post: Post;

  @Output()
  kissEmit: EventEmitter<void> = new EventEmitter<void>();

  kiss(post: any) {
    this.kissEmit.emit();
  }
}

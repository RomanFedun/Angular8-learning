import {Component, Input} from '@angular/core';
import { EventEmitter } from 'protractor';
import { from } from 'rxjs';
export interface Post {
  title: string;
  text: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  

  search = '';
  searchField = 'title';
  
  @Input() post: Post

  posts: Post[] = [
    {title: 'Wood and board', text: 'it is good material for developing'},
    {title: 'meat', text: 'it is good something to eat'},
    {title: 'wolvo', text: 'it is good car to drive'}
  ];

  updatePosts(post: Post) {
    this.posts.unshift(post)
    console.log('Post', post);
  }

  onFocus() {
    console.log('ok');
  }

  // addPost() {
  //   this.posts.unshift({
  //    title: 'new post',
  //    text: 'make new post by Roman Fedun'
  //   })
  // }

}

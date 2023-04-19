import { Component } from '@angular/core';
import {PostsService} from "../services/posts.service";
import {AuthorsService} from "../services/authors.service";

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css']
})
export class StatComponent {


  constructor(private postService :PostsService, private aService :AuthorsService) {
  }
  authors: any;
  posts :any;
  nAuthor = 0;
  nPost = 0;
  authorPostsCount: any;
  ngOnInit(){
    this.aService.getAllAuthors().subscribe(
      data =>{
        this.authors=data
        this.nAuthor= this.authors.length
      }
    )
    this.postService.getAllPosts().subscribe(
      data=>{
        this.posts = data
        this.nPost =this.posts.length
      }
    )
  }
  authorNPost(author_id: number){
    const authorPosts = this.posts.filter((post:any) => post.author_id === author_id);
    return  authorPosts.length;
  }
}

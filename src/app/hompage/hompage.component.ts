import { Component } from '@angular/core';
import {PostsService} from "../services/posts.service";
import {Router} from "@angular/router";
import {AuthorsService} from "../services/authors.service";

@Component({
  selector: 'app-hompage',
  templateUrl: './hompage.component.html',
  styleUrls: ['./hompage.component.css']
})
export class HompageComponent {
  posts :any;
   allPosts: any;
   authors:any

  constructor(private pService : PostsService,private route:Router ,private aService :AuthorsService) { }
  /**comparePostsByDate() {
    if (this.posts ){
      console.log('lea')
      this.posts.sort((p1: any, p2: any)=>new Date(p2.created_at).getTime() - new Date(p1.created_at).getTime())
      console.log(this.posts)
    }

  }**/
  ngOnInit(){
   // this.other.detail = true
    this.pService.getAllPosts().subscribe(data =>{
      this.posts = data;

      this.posts.reverse()
      //this.comparePostsByDate()
      //this.posts = this.posts.sort(this.comparePostsByDate)
    })
    this.aService.getAllAuthors().subscribe(
      data=>{
        this.authors =data;
      }
    )

  }
  getAuthorName(authorId: number): string {

    const author = this.authors.find((author :any )=> author.id === authorId);
    return author ? author.full_name : 'Inconnu';
  }

  detailsPost(id: any) {
    this.route.navigate(['Detail/'+id]);
  }

}

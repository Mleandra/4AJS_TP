import { Component } from '@angular/core';
import {PostsService} from "../services/posts.service";
import {AuthorsService} from "../services/authors.service";
import {Router} from "@angular/router";
import {data} from "autoprefixer";

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {
  constructor(private postsService :PostsService,private authorsSevice:AuthorsService,private route :Router) {
  }

  authors : any
  errorMessage =false;
  errors ="";
  ngOnInit(){
    this.authorsSevice.getAllAuthors().subscribe(
      data =>{
        this.authors =data;
      }
    )
  }

  addPost(postform:any){
    let title = postform.value.title;
    let author = postform.value.author;
    let image = postform.value.image;
    let resume = postform.value.resume;
    let content = postform.value.content;
    console.log(author)
    let post ={
      "title" : title,
      "resume" : resume,
      "content" : content,
      "image_url" : image,
      "author_id" : author,
    }
    //console.log(post)
    //console.log(this.authors)
    this.postsService.createPost(post).subscribe(
      data=>{
        //console.log("create")
        this.route.navigate(['Admin/Admin-Homepage'])

      },error => {
        if(error.status ===400){
          this.errorMessage =true;
          if(error.error.errors){
            for (let [key,value] of Object.entries(error.error.errors)){
              this.errors +="${key}:${value}\n";
            }
          }else {
            this.errors=error.error.message;
          }
        }
        else {
          this.errorMessage =true;
        }
      }
    )

  };



}

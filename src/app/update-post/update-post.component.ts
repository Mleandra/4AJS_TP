import { Component } from '@angular/core';
import {AuthorsService} from "../services/authors.service";
import {PostsService} from "../services/posts.service";
import{ Router,ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent {
  public id : any;
  public title : any;
  public author : any;
  public  image : any;
  public resume : any;
  public content : any;
  postToUpdate :any;
  updateForm: any;
  post:any;
  authors:any;
  errorMessage =false;
  errors = "";
  constructor(private postsService : PostsService,private authorsService: AuthorsService,private route :Router,private aRouter :ActivatedRoute ) {
  }

  ngOnInit (){
    this.aRouter.paramMap.subscribe(
      params =>{
        this.id = params.get('id')
      }
    );
    this.postsService.getOnePost(this.id).subscribe(
      reponse =>{
        this.post =reponse
        this.title =this.post.title
        this.resume = this.post.resume
        this.image=this.post.image_url
        this.content = this.post.content
        this.author= this.post.author_id
      }

    );
    this.authorsService.getAllAuthors().subscribe(
      data =>{
        this.authors =data

      }
    );
  }
  updatePost(){
    this.postToUpdate ={
      "id":this.id,
      "title": this.title,
      "resume": this.resume,
      "image_url": this.image,
      "content": this.content,
      "author_id": this.author,
    }
    this.postsService.updatePost(this.id,this.postToUpdate).subscribe(
  reponse =>{
    this.route.navigate(['Admin/'])
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

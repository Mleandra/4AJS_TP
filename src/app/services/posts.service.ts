import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environments";

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  baseUrl = environment.apiURLPosts
  authorUrl = environment.apiURLAuthors
  constructor(private http : HttpClient) { }

  //recuperation  de tout les posts
  getAllPosts(){
    return this.http.get(this.baseUrl)
  }
  // recuperation  d'un seul post
  getOnePost(id : number){
    return this.http.get(this.baseUrl+id)
  }
  // creation  d'un seul post
  createPost(new_post : any){
    return this.http.post(this.baseUrl,new_post)
  }
  // mise a jour d'un  post
  updatePost(id : number, new_post: any){
    return this.http.put(this.baseUrl+id,new_post)
  }
  // suppression  d'un post
  deletePost(id : number){
    return this.http.delete(this.baseUrl+id)
  }
}

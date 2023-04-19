import { Component ,Input,Output,EventEmitter} from '@angular/core';
import {PostsService} from "../services/posts.service";
import {AuthentificationService} from "../services/authentification.service";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {
  posts :any;
  key :  any ;

  allPosts: any;


  constructor(private postService : PostsService , public  authS:AuthentificationService) {}

      /**ngOnInit(){
        //this.search = this.home
      this.postService.getAllPosts().subscribe(
      data=>{
        this.posts = data
      }
    );
  }
  recherche="";
  search(){
    this.allPosts = this.posts;
    if (this.recherche ===""){
      return this.posts

    }
    else{
      this.posts = this.allPosts.filter((post:any) => {
        let res = post.title.toLowerCase().match(this.recherche.toLowerCase());
        return res;
      });

    }
  }**/


}

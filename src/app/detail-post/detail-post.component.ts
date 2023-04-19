import { Component } from '@angular/core';
import {PostsService} from "../services/posts.service"
import {AuthorsService} from "../services/authors.service";
import {ActivatedRoute} from "@angular/router";
import {AccueilComponent} from "../accueil/accueil.component";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import{Router} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrls: ['./detail-post.component.css']
})
export class DetailPostComponent {
  post : any;
  author : any;
  private  id : any;


  constructor(private location :Location,private postSevice :PostsService,private route: Router,private activeRoute : ActivatedRoute, private authorSevice: AuthorsService) {}
 ngOnInit(){
    this.activeRoute.paramMap.subscribe(
      params =>{this.id =params.get('id')}
    );
    this.postSevice.getOnePost(this.id).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 404) {
          return this.route.navigate(['error']);
        } else {
          return this.route.navigate(['error']);
        }
      })
    ).subscribe(
      data =>{
        this.post =data
        this.authorSevice.getAllAuthors().subscribe(
          data =>{
            console.log()
            this.author = this.authorSevice.getAuthorName(this.post.author_id,data)

          }
        )

      }
    );


 }
 backPage(){
this.location.back()
 }
}

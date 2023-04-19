import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environments";

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  authorsUrl= environment.apiURLAuthors;

  constructor(private http : HttpClient) { }

  getAllAuthors(){
    return this.http.get(this.authorsUrl)
  }
  getAuthorName(authorId: number,authors: any): string {
    if(authors!=undefined){
      const author = authors.find((author :any )=> author.id === authorId);
      return author ? author.full_name : 'Unknown';
    }
    return 'Unknown';

  }
}

import {PostsService} from "../services/posts.service";
import {AuthorsService} from "../services/authors.service";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {Component} from "@angular/core";


@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent {
  constructor(private postsService:PostsService,private router :Router,private authorservive :AuthorsService,private Http : HttpClient) {}

  postDelete:any;
  confirm :any;
  idPost :any;
  showModal = false;
  posts : any;
  authors: any;
  recherch ="";
  ngOnInit(): void{
    console.log("hello")
    this.refreshPosts();
  }
  refreshPosts(){
    this.postsService.getAllPosts().subscribe(
      data =>{
        this.posts =data;
        console.log("hello  lea ")
        console.log(this.posts)
        this.posts =this.posts.reverse();
      })
   this.authorservive.getAllAuthors().subscribe(
     dataA =>{
       this.authors= dataA
       console.log(this.authors)
     }
   )
  }
  getAuthorName(authorId: number): string {

    const author = this.authors.find((author :any )=> author.id === authorId);
    return author ? author.full_name : 'Inconnu';
  }
  detailPost(id : number){
    this.router.navigate(['Admin/Detail/'+id])
  }
  createPost(){
    this.router.navigate(['Admin/Admin-create'])
  }
  updatePost(id : number){
    this.router.navigate(['Admin/Edit/'+id])
  }
  deletePost(id : number){
    this.postsService.deletePost(id).subscribe(
      data =>{
        alert("Post Supprimé!!!")
        this.refreshPosts()
      }
    )
  }

  openModal(postDelete :any){
    this.postDelete = postDelete
    this.showModal = !this.showModal;
  }
  closeModal(){
    this.showModal = !this.showModal;
    alert("Suppression  annuler");


    }
  confirmDel(confirmForm: any){
    //console.log(confirmForm.value.confirm + "   ICCCCCCIIIII")
    this.confirm = confirmForm.value.confirm;
    this.showModal = !this.showModal;
    if (this.confirm === this.postDelete.title){
      this.postsService.deletePost(this.postDelete.id).subscribe(

        data =>{
          console.log(data)
        },
        error =>{
          alert("Post Supprimé!!!")
          console.log(error)
          this.refreshPosts()
        }
      )
    }
    else {
      alert("Erreur de saisi ! Annulation  de la suppression!!!\n Vous avez entrez : "+this.confirm+"\n un doute ? regarder dans lisez_moi")
    }


  }
  reverse= false;
  sort(key: string){
    this.reverse =! this.reverse
  }

}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListPostComponent} from "./list-post/list-post.component";
import {DetailPostComponent} from "./detail-post/detail-post.component";
import {HompageComponent} from "./hompage/hompage.component";
import {AddPostComponent} from "./add-post/add-post.component";
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import {UpdatePostComponent} from "./update-post/update-post.component";
import {AccueilComponent} from "./accueil/accueil.component";
import {StatComponent} from "./stat/stat.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {LoginComponent} from "./login/login.component";
import {LogoutComponent} from "./logout/logout.component";
import {GuardService} from "./services/guard.service";

const routes: Routes = [
  { path: '', component :AccueilComponent, children:[
      { path: '', redirectTo: 'Homepage', pathMatch: 'full' },
      { path: 'Detail/:id', component: DetailPostComponent, },
      { path: 'Homepage', component: HompageComponent },
    ] },
  { path: 'Admin',component : NavBarComponent , canActivate:[GuardService],children:[
      { path: '', redirectTo: 'Admin-Homepage', pathMatch: 'full', },
      { path: 'Admin-Homepage', component: ListPostComponent, },
      { path: 'Detail/:id', component: DetailPostComponent,},
      { path: 'Admin-create', component: AddPostComponent, },
      { path: 'Edit/:id', component: UpdatePostComponent, },
      {path: 'stat',component: StatComponent}
    ]},
  {path: 'login' ,component: LoginComponent},
  {path: 'logout' ,component: LogoutComponent, canActivate:[GuardService]},
  {path: 'error' ,component: NotFoundComponent},
  {path: '**' ,redirectTo: "error"},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

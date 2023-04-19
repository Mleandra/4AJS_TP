import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ListPostComponent } from './list-post/list-post.component';
import { DetailPostComponent } from './detail-post/detail-post.component';
import { HompageComponent } from './hompage/hompage.component';
import { AddPostComponent } from './add-post/add-post.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdatePostComponent } from './update-post/update-post.component';
import { AccueilComponent } from './accueil/accueil.component';
import { RecherchePipe } from './recherche.pipe';
import { NotFoundComponent } from './not-found/not-found.component';
import { StatComponent } from './stat/stat.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ListPostComponent,
    DetailPostComponent,
    HompageComponent,
    AddPostComponent,
    UpdatePostComponent,
    AccueilComponent,
    RecherchePipe,
    NotFoundComponent,
    StatComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

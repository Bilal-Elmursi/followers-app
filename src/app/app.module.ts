import { AppErrorHandler } from './Common/app-error-handler';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FavoriteComponent } from './Favorite/favorite/favorite.component';
import { PanelComponent } from './Panel/panel/panel.component';
import { NavigationComponent } from './Navigation/navigation/navigation.component';
import { FormatTextDirective } from './format-text.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './services/Post.Service';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GithubFollowersService } from './services/github-followers.service';


@NgModule({
  declarations: [
    AppComponent,
    FavoriteComponent,
    PanelComponent,
    NavigationComponent,
    FormatTextDirective,
    ContactFormComponent,
    SignupFormComponent,
    GithubFollowersComponent,
    HomeComponent,
    GithubProfileComponent,
    NotFoundComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'followers', component: GithubFollowersComponent },
      { path: 'profile/:id/:username', component: GithubProfileComponent },
      { path: 'profile', component: GithubProfileComponent },
      { path: 'posts', component: SignupFormComponent },
      { path: '**', component: NotFoundComponent }

    ])
  ],
  providers: [
    PostService,
    GithubFollowersService,
    { provide: ErrorHandler, useClass: AppErrorHandler }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './app-user/landing-page/landing-page.component';
import { AboutPageComponent } from './app-user/about-page/about-page.component';
import { SignInPageComponent } from './app-user/sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './app-user/sign-up-page/sign-up-page.component';
import { HomePageComponent } from './to-dos/home-page/home-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'signin', component: SignInPageComponent },
  { path: 'signup', component: SignUpPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'new', component: HomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  
 }

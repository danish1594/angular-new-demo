import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ImagesComponent } from './images/images.component';
import { LoginComponent } from './Auhenticate/Authenticate.component';
import { VideosComponent } from './videos/videos.component';
import { IdComponent } from './id/id.component';
import { AuthService } from './Auth.service';

const routes: Routes = [{ path: '', component: HomeComponent, canActivate: [AuthService] },
{ path: 'images', component: ImagesComponent, canActivate: [AuthService] },
{ path: 'videos', component: VideosComponent, canActivate: [AuthService] },
{ path: 'login', component: LoginComponent },
{ path: 'id', component: IdComponent, canActivate: [AuthService] }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImagesComponent } from './images/images.component';
import { VideosComponent } from './videos/videos.component';

import { LoginComponent } from './login/login.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';




@NgModule({
  declarations: [
    AppComponent,
    ImagesComponent,
    VideosComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

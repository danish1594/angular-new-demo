import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImagesComponent } from './images/images.component';
import { VideosComponent } from './videos/videos.component';

import { LoginComponent } from './Auhenticate/Authenticate.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { IdComponent } from './id/id.component';
import { TokenService } from './id/token.service';




@NgModule({
  declarations: [
    AppComponent,
    ImagesComponent,
    VideosComponent,
    LoginComponent,
    HomeComponent,
    IdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

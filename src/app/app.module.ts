import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryComponent } from './component/gallery/gallery.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { BlogComponent } from './component/blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    NavbarComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

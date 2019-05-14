import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryComponent } from './component/gallery/gallery.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { BlogComponent } from './component/blog/blog.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { InProgressComponent } from './component/in-progress/in-progress.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxSmartModalModule } from 'ngx-smart-modal';


@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    NavbarComponent,
    BlogComponent,
    AboutUsComponent,
    ContactUsComponent,
    InProgressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxSmartModalModule.forRoot(),
    NgxSmartModalModule.forChild()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

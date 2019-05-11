import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './component/gallery/gallery.component';
import { BlogComponent } from './component/blog/blog.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { AboutUsComponent } from './component/about-us/about-us.component';


const routes: Routes = [
  {path: 'gallery', component: GalleryComponent },
  {path: 'blog', component: BlogComponent },
  {path: 'contact', component: ContactUsComponent },
  {path: 'about', component: AboutUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

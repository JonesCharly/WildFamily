import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './component/gallery/gallery.component';
import { BlogComponent } from './component/blog/blog.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { InProgressComponent } from './component/in-progress/in-progress.component'

const routes: Routes = [
  {path: 'gallery', component: GalleryComponent },
  {path: 'blog', component: BlogComponent },
  {path: 'contact', component: ContactUsComponent },
  {path: 'about', component: AboutUsComponent },
  {path: 'progress', component: InProgressComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

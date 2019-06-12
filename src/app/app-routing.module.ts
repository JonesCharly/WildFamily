import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './component/gallery/gallery.component';
import { BlogComponent } from './component/blog/blog.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { InProgressComponent } from './component/in-progress/in-progress.component';
import { AboutFinalComponent } from './component/about-final/about-final.component';
import { TravelmapComponent } from './component/travelmap/travelmap.component'



const routes: Routes = [
  {path: 'gallery', component: GalleryComponent },
  {path: '', component: GalleryComponent },
  {path: 'map', component: TravelmapComponent },
  {path: 'blog', component: BlogComponent },
  {path: 'contact', component: ContactUsComponent },
  {path: 'about', component: AboutFinalComponent },
  {path: 'progress', component: InProgressComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

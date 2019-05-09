import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './component/gallery/gallery.component';
import { BlogComponent } from './component/blog/blog.component';


const routes: Routes = [
  {path: 'gallery', component: GalleryComponent },
  {path: 'blog', component: BlogComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

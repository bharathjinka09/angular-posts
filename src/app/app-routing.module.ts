import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Routes, RouterModule } from '@angular/router';
import { BloglistComponent } from './bloglist/bloglist.component';
import { BlogformComponent } from './blogform/blogform.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: BloglistComponent, pathMatch: 'full' },
  { path: 'list', component: BloglistComponent },
  { path: 'create', component: BlogformComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule, FormsModule],
  exports: [RouterModule, BloglistComponent, BlogformComponent],
  declarations: [BloglistComponent, BlogformComponent],
})
export class AppRoutingModule {}

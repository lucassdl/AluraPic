import { NotFoundComponent } from './errors/not-found/not-found.component';
import { RouterModule, Routes } from '@angular/router';

import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {path: 'user/:userName', component: PhotoListComponent},
  {path: 'p/add', component: PhotoFormComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule{}

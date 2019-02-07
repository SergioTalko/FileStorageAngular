import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileListComponent } from './file-list/file-list.component';
import { FileEditComponent } from './file-edit/file-edit.component';


const routes: Routes = [
  { path: '', redirectTo: '/file-list', pathMatch: 'full' },
  {
    path: 'file-list',
    component: FileListComponent
  },
  {
    path: 'file-add',
    component: FileEditComponent
  },
  {
    path: 'file-edit/:id',
    component: FileEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }








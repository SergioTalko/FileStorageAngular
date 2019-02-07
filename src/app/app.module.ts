import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FileService } from './shared/file/file.service';
import { FileListComponent } from './file-list/file-list.component';




@NgModule({
  declarations: [
    AppComponent,
    FileListComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    FileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


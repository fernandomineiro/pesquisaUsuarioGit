import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { RepoComponent } from './shared/models/repo/repo.component';


@NgModule({
  declarations: [
    AppComponent,
    RepoComponent
  ],
  imports: [
    BrowserModule,
    PagesModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

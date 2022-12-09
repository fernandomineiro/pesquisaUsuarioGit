import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RepoComponent } from './repo/repo.component';
import { FallowersComponent } from './fallowers/fallowers.component';


@NgModule({
  declarations: [
    HomeComponent,
    RepoComponent,
    FallowersComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule 

  ]
})
export class PagesModule { }

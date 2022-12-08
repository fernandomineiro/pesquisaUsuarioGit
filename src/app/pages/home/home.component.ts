import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GitService } from 'src/app/shared/services/git.service';
import { Git } from 'src/app/shared/models/git';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {

  data: Git;
  page: Boolean | undefined;

  constructor(
    public apiService: GitService,
  ) { 
    this.data = new Git();
  }

  git = new FormGroup({
    username: new FormControl(''),
  });

  ngOnInit() {
   this.page = false;
  }

  search() {
    console.log(this.git.value.username)
    this.apiService.getUserGit(this.git.value.username).subscribe((response) => {
      this.page = true;
      this.data = response;
    });
  }

  exit(){
    this.page = false;
  }

  repo(){
    
  }

}

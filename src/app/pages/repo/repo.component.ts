import { Component, OnInit } from '@angular/core';
import { GitService } from 'src/app/shared/services/git.service';
import { Git } from 'src/app/shared/models/git';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.scss']
})
export class RepoComponent {

  data: Git;

  constructor(

    public apiService: GitService,
  ) { 
    this.data = new Git();
  }

  ngOnInit() {
    this.getRepo();
  }

  getRepo(){
    this.apiService.getRepoGit('fernandomineiro').subscribe((response) => {
      console.log(response)
    });
  }
}

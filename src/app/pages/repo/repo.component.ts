import { Component, OnInit } from '@angular/core';
import { GitService } from 'src/app/shared/services/git.service';
import { Repo } from 'src/app/shared/models/repo';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.scss']
})
export class RepoComponent {

  constructor(
    private route:ActivatedRoute,
    public apiService: GitService,
  ) { 
   
  }

  data: any[] | undefined;
  routeUrl: any;
  
  ngOnInit() {
 
    this.routeUrl = this.route.snapshot.paramMap.get('user');
    console.log(this.routeUrl);
    this.getRepo();
  }

  getRepo(){
    this.apiService.getRepoGit(this.routeUrl).subscribe((response) => {
      this.data = response

    this.data = response.sort((a:any,b:any) => (b.forks_stargazers_count
 > a.forks_stargazers_count) ? 1 : ((a.forks_stargazers_count > b.forks_stargazers_count) ? -1 : 0))
 
 console.log(this.data)
    });
  }
}

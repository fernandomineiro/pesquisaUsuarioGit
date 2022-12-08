import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {

  constructor() { }

  git = new FormGroup({
    username: new FormControl(''),
  });

  ngOnInit() {
   
  }

  save() {
    console.log(this.git.value)
  }

}


interface User {
  username: string;
}
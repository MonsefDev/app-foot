import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app-foot';
  feature="teams";
  ngOnInit(){

  }

  constructor(private router:Router){}
  OnSelecteFeature(feature){
    this.feature=feature;
  }
   

}


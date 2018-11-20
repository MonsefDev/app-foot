import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

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

  OnSelecteFeature(feature){
    this.feature=feature;
  }
}


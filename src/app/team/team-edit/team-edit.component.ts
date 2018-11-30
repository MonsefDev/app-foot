import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team-edit',
  templateUrl: './team-edit.component.html',
  styleUrls: ['./team-edit.component.scss']
})
export class TeamEditComponent implements OnInit {
  id: number;
  idEdit: boolean;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params)=>{
      this.id=+params['id'];
      this.idEdit=!!this.id; 
    })
  }

}

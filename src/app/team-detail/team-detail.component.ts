import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { TeamModule } from 'src/app/team/team.module';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.scss']
})
export class TeamDetailComponent implements OnInit {

  constructor() { }
  @Input() team: TeamModule;
  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { TeamModule } from 'src/app/team/team.module';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  constructor() { }
  selectedTeam: TeamModule;
  ngOnInit() {
  }

  OnSelectItem(team){
    this.selectedTeam=team;
  }

}

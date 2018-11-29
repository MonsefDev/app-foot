import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { TeamModule } from 'src/app/team/team.module';
import { TeamService } from '../team/team.service';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.scss']
})
export class TeamDetailComponent implements OnInit {

  constructor(private teamservice: TeamService) { }
  @Input() team: TeamModule;
  ngOnInit() {
  }

  addPlayersTolist(){
    this.teamservice.addPlayersTolist(this.team.player);
    console.log(this.team.player);

  }

}

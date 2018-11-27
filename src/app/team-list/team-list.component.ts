import { Component, OnInit,EventEmitter } from '@angular/core';
import { TeamModule } from 'src/app/team/team.module';
import { TeamService } from '../team/team.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent implements OnInit {
  teams: TeamModule[];
 
  constructor(private teamsService:TeamService) { }

  ngOnInit() {
    this.teams= this.teamsService.getTeams();    
  }
 
}

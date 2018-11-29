import { Component, OnInit } from '@angular/core';
import { TeamModule } from 'src/app/team/team.module';
import { TeamService } from './team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  constructor(private teamservice: TeamService) { }
  selectedTeam: TeamModule;
  ngOnInit() {
    this.teamservice.SeletedTeam.subscribe((team:TeamModule)=>{
          this.selectedTeam =team;
    })
  }

 

}

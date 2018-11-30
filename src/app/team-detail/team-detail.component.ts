import { Component, OnInit } from '@angular/core';
import { TeamModule } from 'src/app/team/team.module';
import { TeamService } from '../team/team.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.scss']
})
export class TeamDetailComponent implements OnInit {

 
  team: TeamModule;
  constructor(private teamservice: TeamService,private activetedRoute:ActivatedRoute) 
  {
    this.activetedRoute.params.subscribe((params)=>{
      const id=+params['id'];
      this.team=this.teamservice.getTeam(id);
    });
  }
  ngOnInit() {
  }

  addPlayersTolist(){
    this.teamservice.addPlayersTolist(this.team.player);
    console.log(this.team.player);

  }

}

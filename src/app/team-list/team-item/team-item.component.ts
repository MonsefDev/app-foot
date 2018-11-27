import { Component, OnInit,EventEmitter } from '@angular/core';
import { TeamModule } from 'src/app/team/team.module';
import { Input } from '@angular/core';
import { TeamService } from 'src/app/team/team.service';


@Component({
  selector: 'app-team-item',
  templateUrl: './team-item.component.html',
  styleUrls: ['./team-item.component.scss']
})
export class TeamItemComponent implements OnInit {
  @Input() team:TeamModule;
 
  constructor(private teamservice: TeamService) { }

  ngOnInit() {
  }
  OnSelectItem(){
   this.teamservice.SeletedTeam.emit(this.team);
  }

}

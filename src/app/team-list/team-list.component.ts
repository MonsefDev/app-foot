import { Component, OnInit,EventEmitter } from '@angular/core';
import { TeamModule } from 'src/app/team/team.module';
import { Input } from '@angular/core';
import { Output } from '@angular/core';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent implements OnInit {
  teams: TeamModule[];
  @Output() selectedTeam = new EventEmitter<TeamModule>();
  constructor() { }

  ngOnInit() {
    this.teams=[

      new TeamModule('FC Barcelone', 'Més que un club', 'http://pngimg.com/uploads/fcb_logo/fcb_logo_PNG19.png'),
      new TeamModule(
        'Real Madrid',
        'Hala Madrid !',
        'https://medias.lequipe.fr/logo-football/108/300?(none)'
      )
    ];
    
  }
  OnSelectItem(team)
  {
    this.selectedTeam.emit(team);
  }
}

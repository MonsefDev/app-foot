import { Injectable,EventEmitter } from '@angular/core';
import { TeamModule } from './team.module';
import { LogginService } from '../loggin.service';
import { PlayerModel } from '../players/players.module';
 

@Injectable({
  providedIn: 'root'
})

export class TeamService {
  SeletedTeam=new EventEmitter<TeamModule>();
  teams:TeamModule[]=[

    new TeamModule
    ('FC Barcelone', 'Més que un club', 'http://pngimg.com/uploads/fcb_logo/fcb_logo_PNG19.png',
    [
      new PlayerModel('indere Inseta',25),
      new PlayerModel('indere Inseta',25),
    ]
    
    ),
    new TeamModule(
      'Real Madrid',
      'Hala Madrid !',
      'https://medias.lequipe.fr/logo-football/108/300?(none)',
      [
        new PlayerModel('indere Inseta',25),
        new PlayerModel('indere Inseta',25),
      ]
    )
  ];

  constructor(private login:LogginService) { }
  getTeams(){
    this.login.log('TEAM LOGGIN SERVICE');
    return this.teams.slice();
 
    
  }
}

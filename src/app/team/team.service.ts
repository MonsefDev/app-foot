import { Injectable,EventEmitter } from '@angular/core';
import { TeamModule } from './team.module';
import { LogginService } from '../loggin.service';
import { PlayerModel } from '../players/players.module';
import { PlayerService } from '../players/player.service';
 

@Injectable({
  providedIn: 'root'
})

export class TeamService {
  SeletedTeam=new EventEmitter<TeamModule>();
  teams:TeamModule[]=[

    new TeamModule
    ('FC Barcelone', 'Més que un club', 'http://pngimg.com/uploads/fcb_logo/fcb_logo_PNG19.png',
    [
      new PlayerModel('	Busquets Oriol',25),
      new PlayerModel('	Vidal Arturo',25),
      new PlayerModel('	Dembélé Ousmane',25),
      new PlayerModel('	Umtiti, Samuel',25),
    ]
    
    ),
    new TeamModule(
      'Real Madrid',
      'Hala Madrid !',
      'https://medias.lequipe.fr/logo-football/108/300?(none)',
      [
        new PlayerModel('Luka Modrić',30),
        new PlayerModel('Daniel Carvajal',27),
        new PlayerModel('Toni Kroos',26),
        new PlayerModel('Gareth Bale',29),
      ]
    )
  ];

  constructor(private login:LogginService,private playerservice: PlayerService) { }
  getTeams(){
     return this.teams.slice(); 
    
  }

  addPlayersTolist(players: PlayerModel[]){
    this.playerservice.addplayers(players);
  }

  getTeam(id:number){
    return this.teams[id];

  }
}

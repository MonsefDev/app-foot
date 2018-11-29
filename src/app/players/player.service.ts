import { Injectable } from '@angular/core';
import { LogginService } from '../loggin.service';
import { PlayerModel } from './players.module';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  player:PlayerModel[]=[new PlayerModel('Messi',30),new PlayerModel('Ronaldo',30)]

  constructor(private loggingService: LogginService) { }
  getplayers(){
    this.loggingService.log('GET PLAYER');
    return this.player.slice();
  }
  addplayer(player:PlayerModel){
    this.player.push(player);
  }
 
  addplayers(players:PlayerModel[]){
    /*for(let plyer of players){
      this.addplayer(plyer);     
    }*/
    this.player.push(...players);
  
  }
}

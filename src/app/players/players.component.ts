import { Component, OnInit } from '@angular/core';
import { PlayerModel } from './players.module';
import { PlayerService } from './player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  constructor(private playerservice:PlayerService) { }
  players: PlayerModel[];
  ngOnInit() {
    this.players= this.playerservice.getplayers();
  }
  onAddPlayer(player: PlayerModel){
    this.players.push(player);

  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerModel } from '../players/players.module';
 
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class TeamModule {
  public name:string;
  public description:string;
  public image:string;
  public player:PlayerModel[];


  constructor(name:string,description:string,image:string,player:PlayerModel[]){
    this.name=name;
    this.description=description;
    this.image=image;
    this.player=player;

    console.log(player);
  }
 }

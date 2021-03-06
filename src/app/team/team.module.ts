import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerModel } from '../players/players.module';
import { TeamIntroComponent } from './team-intro/team-intro.component';
import { TeamEditComponent } from './team-edit/team-edit.component';
 
@NgModule({
  declarations: [TeamIntroComponent, TeamEditComponent],
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
 
  }
 }

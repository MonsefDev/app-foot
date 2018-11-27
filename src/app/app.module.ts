import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TeamComponent } from './team/team.component';
import { TeamListComponent } from './team-list/team-list.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { TeamItemComponent } from './team-list/team-item/team-item.component';
import { PlayersComponent } from './players/players.component';
import { PlayerEditComponent } from './players/player-edit/player-edit.component';
import { HighlightDirective } from './directive/highlight.directive';
import { DropdownDirective } from './directive/dropdown.directive';
import { TeamService } from './team/team.service';
import { LogginService } from './loggin.service';

 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TeamComponent,
    TeamListComponent,
    TeamDetailComponent,
    TeamItemComponent,
    PlayersComponent,
    PlayerEditComponent,
    HighlightDirective,
    DropdownDirective,
  
   
  ],
  imports: [
    BrowserModule,
    FormsModule,    
    AppRoutingModule
  ],
  providers: [TeamService,LogginService],
  bootstrap: [AppComponent]
})
export class AppModule { }

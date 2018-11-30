import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamComponent } from './team/team.component';
import { PlayersComponent } from './players/players.component';
import { TeamIntroComponent } from './team/team-intro/team-intro.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { TeamEditComponent } from './team/team-edit/team-edit.component';
 

const routes: Routes = 
[
    {path:'',redirectTo:'/teams',pathMatch:'full'},  
    {
      path:'teams',component:TeamComponent,
      children:
      [
        {path:'',component:TeamIntroComponent},
        {path:'new',component:TeamEditComponent},
        {path:':id',component:TeamDetailComponent},     
        {path:':id/edit',component:TeamEditComponent}
      ]},
    {path:'players',component:PlayersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

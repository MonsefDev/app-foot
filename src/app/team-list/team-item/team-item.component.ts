import { Component, OnInit,EventEmitter } from '@angular/core';
import { TeamModule } from 'src/app/team/team.module';
import { Input } from '@angular/core';
import { Output } from '@angular/core';

@Component({
  selector: 'app-team-item',
  templateUrl: './team-item.component.html',
  styleUrls: ['./team-item.component.scss']
})
export class TeamItemComponent implements OnInit {
  @Input() team:TeamModule;
  @Output() selectedTeam = new EventEmitter<TeamModule>();
  constructor() { }

  ngOnInit() {
  }
  OnSelectItem(){
    this.selectedTeam.emit(this.team);
  }

}

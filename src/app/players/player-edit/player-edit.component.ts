import { Component, OnInit,EventEmitter ,Output, ViewChild, ElementRef } from '@angular/core';
import { PlayerModel } from '../players.module';
 

@Component({
  selector: 'app-player-edit',
  templateUrl: './player-edit.component.html',
  styleUrls: ['./player-edit.component.scss']
})
export class PlayerEditComponent implements OnInit {

  @Output() playerAdded=new EventEmitter ();
  @ViewChild('nameInput') nameInput:ElementRef;
  @ViewChild('ageInput')  ageInput:ElementRef;
  
  constructor() { }

  ngOnInit() {
  }
  OnAddPlayer(){
    const name=this.nameInput.nativeElement.value;
    const age=this.ageInput.nativeElement.value;
    const newplayer=new PlayerModel(name,age);
    this.playerAdded.emit(newplayer);
  }
}

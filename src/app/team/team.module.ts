import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 
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


  constructor(name:string,description:string,image:string){
    this.name=name;
    this.description=description;
    this.image=image;
  }
 }

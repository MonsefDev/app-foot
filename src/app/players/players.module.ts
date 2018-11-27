import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class PlayerModel {
  public name:string;
  public age:number;
 


  constructor(name:string,age:number ){
    this.name=name;
    this.age=age;
 
  }
 }

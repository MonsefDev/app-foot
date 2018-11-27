import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogginService {

  constructor() { }

  log(msg:string):void{
    console.log(msg);
  }
}

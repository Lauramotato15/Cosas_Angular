import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({providedIn: 'root'})
export class GifsService {
  constructor() { }

  private gifsHistory: string[] = [];

  public get getHistory():string[]{
    return [...this.gifsHistory];
  }

  public findValueImput(value:string){
    console.log(value);
  }

  public newValueHistory(value:string):void{
    if(value == '') return;
    this.organizyValue(value);
    this.gifsHistory.unshift(value);
  }

  public organizyValue(value:string):void{
    value = value.toLowerCase();
    if(this.gifsHistory.includes(value)){
      this.gifsHistory = this.gifsHistory.filter(gifValue => gifValue !== value);
    }

    this.gifsHistory = this.gifsHistory.splice(0,10);
  }
}

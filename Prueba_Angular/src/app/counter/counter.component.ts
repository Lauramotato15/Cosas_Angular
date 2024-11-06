import { Component } from "@angular/core";

@Component({
    selector: 'app-counter',
    template: `
      <h1>{{count}}</h1>
      <button (click)="decrements(1)">Decrementar</button>
      <button (click)="reset(10)">Reset</button>
      <button (click)="increment(1)">Incrementar</button>
    `
})
export class CounterComponent{
  public title = 'Prueba de Angular';
  public count = 10;

  increment(value:number):void{
    this.count += value;
  }

  decrements(value:number):void{
    this.count -= value;
  }

  reset(value:number):void{
    this.count = 10;
  }
}

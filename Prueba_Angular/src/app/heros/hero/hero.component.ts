import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  private name :string = 'Iroman';
  public age  :number = 22;

  get capitalizace():string{
    return this.name.toUpperCase();
  }

  get getName():string{
    return this.name
  }

  getHeroDescription():string{
    return `${this.name}-${this.age}`;
  }

  changeName(newName:string):void{
    this.name = newName;
  }

  changeAge(newAge:number):void{
    this.age = newAge;
  }

  resetForm(){
    this.name = 'Iroman';
    this.age = 22;
  }
}

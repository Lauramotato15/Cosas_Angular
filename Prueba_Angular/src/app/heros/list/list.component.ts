import { Component } from '@angular/core';

@Component({
  selector: 'app-heros-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroesNames :string[] = ['spiderman','Iroman','Hulk','Maravilla'];
  public deleteHero? :string;

  borrarHeroe():void{
    this.deleteHero= this.heroesNames.pop();
  }
}

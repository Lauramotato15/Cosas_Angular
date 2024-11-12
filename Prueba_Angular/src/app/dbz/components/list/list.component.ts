import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Character } from '../../interface/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Output()
  public deletePersonaje:EventEmitter<number> = new EventEmitter();

  @Input()
  public characterList:Character[] = []

  public onDeleteCharacter(indice:number):void{
    this.deletePersonaje.emit(indice);
  }
}

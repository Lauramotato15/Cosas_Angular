import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Character } from '../../interface/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Output()
  public onDeleteCharacter:EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList:Character[] = []

  public emitDeleteCharacter(idPersonaje:string):void{
    this.onDeleteCharacter.emit(idPersonaje);
  }
}

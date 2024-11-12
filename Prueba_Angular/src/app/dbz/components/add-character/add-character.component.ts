import { Character } from './../../interface/character.interface';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {
  public character = {
    id:'',
    name: '',
    power: 0
  }

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  emitAddCharacter(){
    this.onNewCharacter.emit(this.character);
    this.character = {
      id:'',
      name:'',
      power: 0
    }
  }
}

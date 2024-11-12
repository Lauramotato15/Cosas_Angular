import { Character } from './../../interface/character.interface';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {
  public caracther = {
    name: '',
    power: 0
  }

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  emitPersonaje(){
    this.onNewCharacter.emit(this.caracther);
    this.caracther = {
      name:'',
      power: 0
    }
  }
}

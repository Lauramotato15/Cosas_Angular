import { Injectable } from '@angular/core';
import {v4 as uuid} from 'uuid';
import { Character } from '../interface/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {
  constructor() {}

  public arrayCharacter :Character[] = [
    {
      id:uuid(),
      name: "Krillin",
      power: 27
    },
    {
      id:uuid(),
      name: "Goku",
      power: 12
    }
  ];

  public onNewCharacter(character:Character):void{
    const newCharacter = {...character};
    this.arrayCharacter.push(newCharacter);
  }

  public deleteCharacterById(idPersonaje:string):void{
    this.arrayCharacter = this.arrayCharacter.filter(personaje => personaje.id != idPersonaje);
  }

}

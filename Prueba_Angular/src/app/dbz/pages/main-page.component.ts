import { Component} from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interface/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-pages.component.html'
})

export class MainPageComponent {
  constructor(private serviceDbz:DbzService){}

  public get characters():Character[]{
    return this.serviceDbz.arrayCharacter;
  }

  public deleteCharacter(idCharacter:string):void{
    this.serviceDbz.deleteCharacterById(idCharacter);
  }

  public addCharacter(newCharacter:Character):void{
    this.serviceDbz.onNewCharacter(newCharacter);
  }
}

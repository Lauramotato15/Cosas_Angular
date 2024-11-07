import { Component} from '@angular/core';
import { Character } from '../interface/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-pages.component.html'
})

export class MainPageComponent {
  public arrayCharacter :Character[] = [
    {
      name: "Krillin",
      power: 27
    },
    {
      name: "Goku",
      power: 12
    }
  ];
}

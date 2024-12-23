import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {

  constructor(private serviceGift:GifsService ){};

  @ViewChild('value')
  public tagSearch!: ElementRef<HTMLInputElement>;

  public onKeyUp(tecla:KeyboardEvent){
    if(tecla.key == 'Enter'){
      this.find();
    }
  }

  public find():void{
    let value = this.tagSearch.nativeElement.value;
    value = value.toLowerCase();
    this.serviceGift.newValueHistory(value);
    this.tagSearch.nativeElement.value = '';
  }
}

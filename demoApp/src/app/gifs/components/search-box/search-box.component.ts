import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {

  constructor(private serviceGift:GifsService ){};

  @ViewChild('find')
  public tagSearch!: ElementRef<HTMLInputElement>;

  public onKeyUp(tecla:KeyboardEvent){
    if(tecla.key == 'Enter'){
      this.findValue();
    }
  }

  public findValue():void{
    const findValue = this.tagSearch.nativeElement.value;
    this.serviceGift.findValueImput(findValue);
    this.serviceGift.newValueHistory(findValue);
    this.tagSearch.nativeElement.value = '';
  }
}

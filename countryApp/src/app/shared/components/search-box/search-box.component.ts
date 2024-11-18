import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {;

  @ViewChild('txtImput')
  tagSearch!: ElementRef<HTMLInputElement>;

  @Input()
  public placeholder:string = '';

  @Output()
  public onEvent:EventEmitter<string> = new EventEmitter();

  public teclaValidador(tecla:KeyboardEvent){
    if(tecla.code == 'Enter'){
      this.find();
    }
  }

  public find(){
    const valor = this.tagSearch.nativeElement.value;
    this.onEvent.emit(valor);
    this.tagSearch.nativeElement.value = '';
  }
}

import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent implements OnInit{;

  public debouncer: Subject<string> = new Subject<string>;

  @ViewChild('txtImput')
  tagSearch!: ElementRef<HTMLInputElement>;

  @Input()
  public placeholder:string = '';

  @Input()
  public initialValue = '';

  @Output()
  public onEvent:EventEmitter<string> = new EventEmitter();

  @Output()
  public onDebounce:EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
    this.debouncer
    .pipe(
      debounceTime(600)
    )
    .subscribe(value => {
      this.onDebounce.emit(value);
      this.tagSearch.nativeElement.value = '';
    })
  }

  public keyPressFind(valueFind:string){
    this.debouncer.next(valueFind);
  }

  /* public teclaValidador(tecla:KeyboardEvent){
    if(tecla.code == 'Enter'){
      this.find();
    }
  } */

  public find(){
    const valor = this.tagSearch.nativeElement.value;
    this.onEvent.emit(valor);
    this.tagSearch.nativeElement.value = '';
  }
}

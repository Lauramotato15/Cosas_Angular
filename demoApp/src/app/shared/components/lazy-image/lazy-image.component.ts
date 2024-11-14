import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrl: './lazy-image.component.css'
})
export class LazyImageComponent implements OnInit{
  private loadI:boolean = false;

  @Input()
  public url!:string;

  @Input()
  public alt!:string

  get load():boolean{
    return this.loadI;
  }

  ngOnInit(): void {
    if(!this.url || !this.alt)throw new Error('is property required')
  }

  loadImage(){
    this.loadI = true;
    console.log(this.loadI);
  }
}

import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'reactive-basic-pages',
  templateUrl: './basi-pages.component.html',
  styleUrl: './basi-pages.component.css'
})

export class BasiPagesComponent {
  public form: FormGroup = new FormGroup({
    name: new FormControl('',[],[]),
    price: new FormControl(0,[],[]),
    inStorage: new FormControl(0,[],[]),
  });
}

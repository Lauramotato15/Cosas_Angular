import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.css'
})
export class ByCountryPageComponent {
  public arrayCountrys: Country[] = [];

  constructor(private serviceCountry: CountryService){}

  findByCountry(value:string){
    this.serviceCountry.getFindCountry(value).subscribe(resp => {
      this.arrayCountrys = resp;
    })
  }
}

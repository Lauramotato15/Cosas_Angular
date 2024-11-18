import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css'
})

export class ByCapitalPageComponent {

  public arrayCountrys:Country[] = [];

  constructor(private servicioCountries:CountryService){}

  public find(value:string){
    this.servicioCountries.getFindCountry(value).subscribe(countrys => {
      this.arrayCountrys = countrys;
    });
  }
}

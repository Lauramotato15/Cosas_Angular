import { Component, Input, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';
import { CachStore } from '../../interfaces/cache-store.interface';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.css'
})
export class ByCountryPageComponent implements OnInit{

  @Input()
  public initValue:string = '';

  public arrayCountrys: Country[] = [];

  constructor(private serviceCountry: CountryService){}

  findByCountry(value:string){
    this.serviceCountry.getFindCountry(value).subscribe(resp => {
      this.arrayCountrys = resp;
    })
  }

  ngOnInit(): void {
    this.arrayCountrys = this.serviceCountry.cacheStore.byCountries.countries;
  }

  get valueInit():string{
    return this.initValue = this.serviceCountry.cacheStore.byCountries.term;
  }
}

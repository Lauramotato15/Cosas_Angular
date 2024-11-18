import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css'
})

export class ByCapitalPageComponent implements OnInit{

  public arrayCapital:Country[] = [];

  public isLoading:boolean = false;

  constructor(private servicioCountries:CountryService){};

  ngOnInit(): void {
    this.arrayCapital = this.servicioCountries.cacheStore.byCapital.countries;
  }

  public findCapital(value:string){
    this.isLoading = true;
    this.servicioCountries.getFindCapital(value).subscribe(countrys => {
      this.arrayCapital = countrys;
      this.isLoading = false;
    });
  }

  get valueInitial():string{
    return this.servicioCountries.cacheStore.byCapital.term;
  }
}

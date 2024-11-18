import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css'
})
export class ByRegionPageComponent {

  public arrayRegion:Country[] = [];
  public regions: Region[] = ['Americas', 'Africa', 'Asia', 'Europe', 'Oceania'];
  public selectedRegion?:Region;

  constructor(private servicioCountries:CountryService){}

  public findRegion(region:Region){
    this.selectedRegion = region;
    this.servicioCountries.getFindRegion(region).subscribe(countrys => {
      this.arrayRegion = countrys;
    });
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountryService{

  public urlMain = 'https://restcountries.com/v3.1';
  constructor(private http:HttpClient) { }

  public getFindCountry(value:string):Observable<Country[]>{
    return this.http.get <Country[]>(`${this.urlMain}/capital/${value}`);
  }
}

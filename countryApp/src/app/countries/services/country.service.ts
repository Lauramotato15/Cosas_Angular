import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, pipe, tap } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { CachStore } from '../interfaces/cache-store.interface';

@Injectable({providedIn: 'root'})
export class CountryService{

  public cacheStore: CachStore = {
    byCapital: { term : '', countries: [] },
    byCountries: { term : '', countries: []},
    byRegion: {region: '', countries: []}
  }

  public urlMain = 'https://restcountries.com/v3.1';
  constructor(private http:HttpClient) { }

  public getHttpRequest(url: string):Observable<Country[]>{
    return this.http.get <Country[]>(url)
    .pipe(catchError(() =>  of([])))
  }

  public getFindCapital(term:string):Observable<Country[]>{
    const url = `${this.urlMain}/capital/${term}`;
    return this.getHttpRequest(url)
    .pipe(
      tap(countries => this.cacheStore.byCapital = { term, countries})
    )
  }

  public getFindCountry(value:string):Observable<Country[]>{
    const url = `${this.urlMain}/name/${value}`;
    return this.getHttpRequest(url);
  }

  public getFindRegion(value:string):Observable<Country[]>{
    const url = `${this.urlMain}/region/${value}`;
    return this.getHttpRequest(url);
  }

  public getCountryById(id:string):Observable<Country | null>{
    return this.http.get <Country[]>(`${this.urlMain}/alpha/${id}`)
    .pipe(
      map(countries => countries.length > 0 ? countries[0] : null),
      catchError(() =>  of(null))
    )
  }
}

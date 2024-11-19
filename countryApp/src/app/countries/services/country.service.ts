import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, pipe, tap } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { CachStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';

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

  public getFindCountry(term:string):Observable<Country[]>{
    const url = `${this.urlMain}/name/${term}`;
    return this.getHttpRequest(url)
    .pipe(
      tap(countries => this.cacheStore.byCountries = { term, countries })
    )
  }

  public getFindRegion(region :Region):Observable<Country[]>{
    const url = `${this.urlMain}/region/${region}`;
    return this.getHttpRequest(url)
    .pipe(
      tap(countries => this.cacheStore.byRegion = { region, countries})
    )
  }

  public getCountryById(id:string):Observable<Country | null>{
    return this.http.get <Country[]>(`${this.urlMain}/alpha/${id}`)
    .pipe(
      map(countries => countries.length > 0 ? countries[0] : null),
      catchError(() =>  of(null))
    )
  }
}

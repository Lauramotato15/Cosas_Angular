import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({providedIn: 'root'})
export class GifsService {

  private gifsList: Gif[] = [];
  private gifsHistory: string[] = [];
  private urlMain:string = 'https://api.giphy.com/v1/gifs';
  private appKey:string = 'e9RBTzWUoT8qgTZnj7TmtmWOFYVv2n8p';

  constructor(private http:HttpClient) {
    this.loadLocalStorage();
  }

  public get getHistoryGifs():string[]{
    return [...this.gifsHistory];
  }

  public get getArrayGifs():Gif[]{
    return [...this.gifsList];
  }

  public saveLocalStorage(){
    localStorage.setItem('history', JSON.stringify(this.gifsHistory));
  }

  public loadLocalStorage(){
    const history = localStorage.getItem('history');
    if(!history) return;

    this.gifsHistory = JSON.parse(history!) ;

    if(this.gifsHistory.length === 0)return;

    const findFirst = this.gifsHistory[0];
    this.newValueHistory(findFirst);
  }

  public getGifs(value:string):void{
    const params = new HttpParams()
    .set('api_key',this.appKey)
    .set('limit', 9)
    .set('q', value)

    this.http.get<SearchResponse>(`${this.urlMain}/search`, {params})
    .subscribe(resp => {
      this.gifsList = resp.data;
    })
  }

  public organizyValue(value:string):void{
    if(this.gifsHistory.includes(value)){
      this.gifsHistory = this.gifsHistory.filter(gifValue => gifValue !== value);
    }

    this.gifsHistory = this.gifsHistory.splice(0,10);

    this.getGifs(value);
  }

  public newValueHistory(value:string):void{
    if(value == '') return;
    this.organizyValue(value);
    this.gifsHistory.unshift(value);
    this.saveLocalStorage();
  }

}

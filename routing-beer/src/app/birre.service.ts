import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BirreService {
  
  searchBirre(query: string){
    const url = `https://api.punkapi.com/v2/beers?beer_name=${query}`;
    let obse = this.http.get(url);
    return obse;
  }
  searchD(query: any){
    const url = `https://api.punkapi.com/v2/beers/${query}`;
    let obseD = this.http.get(url);
    return obseD;
  }

  constructor(private http: HttpClient) { }
}
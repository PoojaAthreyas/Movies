import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovielistService {
  
  apiKey ='apikey=ac3c4468'
  baseUrl='http://www.omdbapi.com/'
  constructor(private httpclient: HttpClient) { }

  getMovielist():Observable<any>{
    const url = '${baseUrl}?i=tt3896198&${apiKey}'  
   return this.httpclient.get(url)
  }
}

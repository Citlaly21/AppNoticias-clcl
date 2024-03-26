import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaClclService {

  constructor(private http: HttpClient) { }

  getNoticias(parametros: any): Observable<any> {
    const URL = 'https://newsapi.org/v2/top-headlines?country=' 
    + parametros.pais+'&category='+parametros.categoria+'&apiKey=d12bea294d964ccea10f8298111a8d86'

    return this.http.get(URL);
  }


}

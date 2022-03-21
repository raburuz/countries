import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private apiUrl: string = 'https://restcountries.com/v3.1/';
  private url: string = `${this.apiUrl}/name/`;

  constructor(private http: HttpClient) {}

  buscarPais(termino: string): Observable<Pais[]> {
    return this.http.get<Pais[]>(`${this.url}${termino}`);
  }
}

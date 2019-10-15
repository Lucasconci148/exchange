import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {
  apiKey = '932c8b318b64c015730e726d3f0b1848';

  constructor(
    private http: HttpClient,
  ) { }

  getExchange() {
    return this.http.get(`http://data.fixer.io/api/latest?access_key=${this.apiKey}`);
  }
}
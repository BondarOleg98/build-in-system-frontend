import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  baseUrl = 'http://localhost:8000';
  httpHeaders = new HttpHeaders({'Content-type': 'application/json'});

  constructor(private http: HttpClient) { }
 
  list() {
    return this.http.get(this.baseUrl + '/api/currencies',
      {headers: this.httpHeaders}
    );
  }
 
  create(currency: any) {
    return this.http.post(this.baseUrl + '/api/currencies', JSON.stringify(currency),
      {headers: this.httpHeaders}
    );
  }
  delete(currency: any) {
    return this.http.delete(this.baseUrl + '/api/currencies/' + currency.code_currency,
      {headers: this.httpHeaders}
    );
  }
}

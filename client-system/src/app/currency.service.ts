import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private http: HttpClient) { }
 
  list() {
    return this.http.get('/api/currencies');
  }
 
  create(currency: any) {
    return this.http.post('/api/currencies', JSON.stringify(currency));
  }
}

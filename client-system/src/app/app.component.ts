import {Component, OnInit} from '@angular/core';
import {CurrencyService} from './currency.service';
import {throwError} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'client-system';

   public currencies: any;
 
   public new_currency: any;
  
   constructor(private _currencyService: CurrencyService) { }
  
   ngOnInit() {
     this.getCurrencies();
     this.new_currency = {};
   }
  
  
   getCurrencies() {
     this._currencyService.list().subscribe(
       data => {
        console.log(data);
        this.currencies = data;
       },
       err => console.error(err),
       () => console.log('done loading currencies')
     );
   }
  
   createCurrency() {
     this._currencyService.create(this.new_currency).subscribe(
        data => {
          this.getCurrencies();
          return true;
        },
        error => {
          console.error('Error saving!');
          return throwError(error);
        }
     );
   }
}

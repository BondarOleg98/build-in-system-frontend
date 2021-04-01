import {Component, OnInit} from '@angular/core';
import {CurrencyService} from './currency.service';
import {throwError} from 'rxjs';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  value = 'Clear me';

  dispalyedColumns = ['code_currency', 'name_currency'];
  
  title = 'client-system';

  public currencies: any;
 
  public new_currency: any;
  
  constructor(private _currencyService: CurrencyService,
              private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer, 
    ) { 
      this.matIconRegistry.addSvgIcon(
        "button_add",
        this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/button_add.svg")
      );
  }
  
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
   deleteCurrency() {
    this._currencyService.delete(this.new_currency).subscribe(
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

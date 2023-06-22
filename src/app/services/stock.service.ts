import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { STOCK_API } from '../shared/globals/api';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private HttpClient : HttpClient) { }

  public getStocks(stockName : string) {
    return this.HttpClient.get<any>(STOCK_API.base_alphavantage+"?function="+stockName+"&interval=monthly&apikey=demo");
  }

}

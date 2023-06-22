import { Component, Input, OnInit } from '@angular/core';
import { StockService } from 'src/app/services/stock.service';
import { Stock } from 'src/app/shared/interfaces/stock';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {

  @Input()
  stockName! : string;
  stock! : Stock

  constructor(private stockService : StockService) {

  }

  ngOnInit(): void {
    this.stockService.getStocks(this.stockName).subscribe((stock: any) => {
      stock.name = this.stockName;
      stock.slug = this.stockName.toLowerCase().replace(" ", "-")
      stock.data.forEach((item: any) => {
        if (this.stockName === "SUGAR")
          item.value = item.value * 2.205 / 100;
        else if (this.stockName === "CORN")
          item.value = item.value / 1000;
      });
      stock.percent = ((stock.data[0].value - stock.data[1].value) / stock.data[1].value) * 100
      this.stock = stock;
    });
  } 

}

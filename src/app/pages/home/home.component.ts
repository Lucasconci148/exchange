import { Component, OnInit } from '@angular/core';
import { ExchangeService } from '../../services/exchange.service';
import { DataService } from 'src/app/services/data.service';
import { IExchange } from 'src/app/interfaces/exchange.interface';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public eu: number;
  public usd: number;

  constructor(
    public exchangeService: ExchangeService,
    public data: DataService) {   
  }

  ngOnInit() {
    this.getExchange();
  }

  exchange() {
    this.usd = this.eu * this.data.getDollar();
  }

  getExchange() {
    this.getDataFixerIO();
    this.callingAgain();
  }

  getDataFixerIO(){
    this.exchangeService.getExchange().subscribe( (resp: IExchange) => {
      if(resp.success) {
        this.data.setDollar(resp.rates.USD);
      } else {
        alert(resp.error.info);
      }
    });
  }

  callingAgain(){
    setTimeout(() => {
      this.getExchange();
    }, 600000);
  }
}

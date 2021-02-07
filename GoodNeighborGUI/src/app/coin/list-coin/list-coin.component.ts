import { Component, OnInit } from '@angular/core';
import {Contact} from '../../contact/contact.model';
import {Coin} from '../coin.model';
import {CoinService} from '../coin.service';

@Component({
  selector: 'app-list-coin',
  templateUrl: './list-coin.component.html',
  styleUrls: ['./list-coin.component.css']
})
export class ListCoinComponent implements OnInit {
  displayedColumns: string[] = ['action', 'name', 'acronym'];
  coins: Coin[];

  constructor(private coinService: CoinService) { }

  ngOnInit(): void {this.coinService.requestList().toPromise().then(value => {
    this.coins = (value as Coin[]);
  }).catch(reason => alert(reason));
  }

  add(): void {
    this.coinService.add();
  }

  show(coin: Coin): void {
    this.coinService.show(coin);
  }

}

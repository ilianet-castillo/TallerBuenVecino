import {Component, OnInit} from '@angular/core';
import {CoinModel} from '../coin.model';
import {CoinService} from '../coin.service';

@Component({
  selector: 'app-list-coin',
  templateUrl: './list-coin.component.html',
  styleUrls: ['./list-coin.component.css']
})
export class ListCoinComponent implements OnInit {

  displayedColumns: string[] = ['action', 'name', 'acronym'];
  coins: CoinModel[];

  constructor(private coinService: CoinService) {
  }

  ngOnInit(): void {
    this.coinService.requestList().toPromise().then(value => {
      this.coins = (value as CoinModel[]);
    }).catch(reason => alert(reason));
  }

  add(): void {
    this.coinService.add();
  }

  show(coin: CoinModel): void {
    this.coinService.show(coin);
  }

}

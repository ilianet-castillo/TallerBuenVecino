import {Component, OnInit} from '@angular/core';
import {CoinService} from '../coin.service';
import {Coin} from '../coin.model';

@Component({
  selector: 'app-show-coin',
  templateUrl: './show-coin.component.html',
  styleUrls: ['./show-coin.component.css']
})
export class ShowCoinComponent implements OnInit {
  coin: Coin;

  constructor(private coinService: CoinService) {
  }

  ngOnInit(): void {
    this.coinService.requestGet().toPromise().then(value => {
      this.coin = value as Coin;
    }).catch(reason => alert(reason));
  }

  edit(): void {
    this.coinService.edit(this.coin);
  }

  cancel(): void {
    this.coinService.list();
  }

}

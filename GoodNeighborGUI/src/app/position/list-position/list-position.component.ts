import {Component, OnInit} from '@angular/core';
import {Coin} from '../../coin/coin.model';
import {PositionService} from '../position.service';

@Component({
  selector: 'app-list-position',
  templateUrl: './list-position.component.html',
  styleUrls: ['./list-position.component.css']
})
export class ListPositionComponent implements OnInit {
  displayedColumns: string[] = ['action', 'name'];
  positions: Position[];

  constructor(private positionService: PositionService) {
  }

  ngOnInit(): void {
    this.positionService.requestList().toPromise().then(value => {
      this.positions = (value as Position[]);
    }).catch(reason => alert(reason));
  }

  add(): void {
    this.positionService.add();
  }

  show(coin: Coin): void {
    this.positionService.show(coin);
  }
}

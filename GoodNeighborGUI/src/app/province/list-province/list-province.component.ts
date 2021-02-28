import {Component, OnInit} from '@angular/core';
import {CoinModel} from '../../coin/coin.model';
import {ProvinceModel} from '../province.model';
import {ProvinceService} from '../province.service';

@Component({
  selector: 'app-list-province',
  templateUrl: './list-province.component.html',
  styleUrls: ['./list-province.component.css']
})
export class ListProvinceComponent implements OnInit {

  displayedColumns: string[] = ['action', 'name'];
  provinces: ProvinceModel[];

  constructor(private provinceService: ProvinceService) {
  }

  ngOnInit(): void {
    this.provinceService.requestList().toPromise().then(value => {
      this.provinces = (value as ProvinceModel[]);
    }).catch(reason => alert(reason));
  }

  add(): void {
    this.provinceService.add();
  }

  show(coin: CoinModel): void {
    this.provinceService.show(coin);
  }

}

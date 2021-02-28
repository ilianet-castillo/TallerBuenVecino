import {Component, OnInit} from '@angular/core';
import {ProvinceModel} from '../province.model';
import {ProvinceService} from '../province.service';
import {PositionModel} from '../../position/position.model';

@Component({
  selector: 'app-show-province',
  templateUrl: './show-province.component.html',
  styleUrls: ['./show-province.component.css']
})
export class ShowProvinceComponent implements OnInit {

  province: ProvinceModel;

  constructor(private provinceService: ProvinceService) {
  }

  ngOnInit(): void {
    this.provinceService.requestGet().toPromise().then(value => {
      this.province = value as PositionModel;
    }).catch(reason => alert(reason));
  }

  edit(): void {
    this.provinceService.edit(this.province);
  }

  cancel(): void {
    this.provinceService.list();
  }

}

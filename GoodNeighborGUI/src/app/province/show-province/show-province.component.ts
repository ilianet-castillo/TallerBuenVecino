import {Component, OnInit} from '@angular/core';
import {Province} from '../province.model';
import {ProvinceService} from '../province.service';
import {Position} from '../../position/position.model';

@Component({
  selector: 'app-show-province',
  templateUrl: './show-province.component.html',
  styleUrls: ['./show-province.component.css']
})
export class ShowProvinceComponent implements OnInit {
  province: Province;

  constructor(private provinceService: ProvinceService) {
  }

  ngOnInit(): void {
    this.provinceService.requestGet().toPromise().then(value => {
      this.province = value as Position;
    }).catch(reason => alert(reason));
  }

  edit(): void {
    this.provinceService.edit(this.province);
  }

  cancel(): void {
    this.provinceService.list();
  }

}

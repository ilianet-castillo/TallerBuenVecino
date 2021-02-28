import {Component, OnInit} from '@angular/core';
import {OrderWorkshopTypeModel} from '../order-workshop-type.model';
import {OrderWorkshopTypeService} from '../order-workshop-type.service';

@Component({
  selector: 'app-show-order-workshop-type',
  templateUrl: './show-order-workshop-type.component.html',
  styleUrls: ['./show-order-workshop-type.component.css']
})
export class ShowOrderWorkshopTypeComponent implements OnInit {

  orderWorkshopType: OrderWorkshopTypeModel;

  constructor(private orderWorkshopTypeService: OrderWorkshopTypeService) {
  }

  ngOnInit(): void {
    this.orderWorkshopTypeService.requestGet().toPromise().then(value => {
      this.orderWorkshopType = value as OrderWorkshopTypeModel;
    }).catch(reason => alert(reason));
  }

  edit(): void {
    this.orderWorkshopTypeService.edit(this.orderWorkshopType);
  }

  cancel(): void {
    this.orderWorkshopTypeService.list();
  }

}

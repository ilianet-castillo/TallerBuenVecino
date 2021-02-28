import {Component, OnInit} from '@angular/core';
import {OrderWorkshopTypeModel} from '../order-workshop-type.model';
import {OrderWorkshopTypeService} from '../order-workshop-type.service';

@Component({
  selector: 'app-list-order-workshop-type',
  templateUrl: './list-order-workshop-type.component.html',
  styleUrls: ['./list-order-workshop-type.component.css']
})
export class ListOrderWorkshopTypeComponent implements OnInit {

  displayedColumns: string[] = ['action', 'name'];
  orderWorkshopTypes: OrderWorkshopTypeModel[];

  constructor(private orderWorkshopTypeService: OrderWorkshopTypeService) {
  }

  ngOnInit(): void {
    this.orderWorkshopTypeService.requestList().toPromise().then(value => {
      this.orderWorkshopTypes = (value as OrderWorkshopTypeModel[]);
    }).catch(reason => alert(reason));
  }

  add(): void {
    this.orderWorkshopTypeService.add();
  }

  show(orderWorkshopType: OrderWorkshopTypeModel): void {
    this.orderWorkshopTypeService.show(orderWorkshopType);
  }

}

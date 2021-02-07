import {Component, OnInit} from '@angular/core';
import {OrderWorkshop} from '../order-workshop.model';
import {OrderWorkshopService} from '../order-workshop.service';

@Component({
  selector: 'app-show-order-workshop',
  templateUrl: './show-order-workshop.component.html',
  styleUrls: ['./show-order-workshop.component.css']
})
export class ShowOrderWorkshopComponent implements OnInit {
  orderWorkshop: OrderWorkshop;

  constructor(private orderWorkshopService: OrderWorkshopService) {
  }

  ngOnInit(): void {
    this.orderWorkshopService.requestGet().toPromise().then(value => {
      this.orderWorkshop = value as OrderWorkshop;
    }).catch(reason => alert(reason));
  }

  edit(): void {
    this.orderWorkshopService.edit(this.orderWorkshop);
  }

  cancel(): void {
    this.orderWorkshopService.list();
  }

}

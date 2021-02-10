import {Component, OnInit} from '@angular/core';
import {OrderWorkshop} from '../order-workshop.model';
import {OrderWorkshopService} from '../order-workshop.service';

@Component({
  selector: 'app-list-order-workshop',
  templateUrl: './list-order-workshop.component.html',
  styleUrls: ['./list-order-workshop.component.css']
})
export class ListOrderWorkshopComponent implements OnInit {
  displayedColumns: string[] = ['action', 'dateOrder', 'dateEntrance', 'dateExit', 'type', 'state'];
  orderWorkshops: OrderWorkshop[];

  constructor(private orderWorkshopService: OrderWorkshopService) {
  }

  ngOnInit(): void {
    this.orderWorkshopService.requestList().toPromise().then(value => {
      this.orderWorkshops = (value as OrderWorkshop[]);
    }).catch(reason => alert(reason));
  }

  add(): void {
    this.orderWorkshopService.add();
  }

  show(orderWorkshop: OrderWorkshop): void {
    this.orderWorkshopService.show(orderWorkshop);
  }

}

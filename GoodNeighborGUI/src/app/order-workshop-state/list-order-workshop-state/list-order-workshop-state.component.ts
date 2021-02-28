import {Component, OnInit} from '@angular/core';
import {OrderWorkshopStateService} from '../order-workshop-state.service';
import {OrderWorkshopStateModel} from '../order-workshop-state.model';

@Component({
  selector: 'app-list-order-workshop-state',
  templateUrl: './list-order-workshop-state.component.html',
  styleUrls: ['./list-order-workshop-state.component.css']
})
export class ListOrderWorkshopStateComponent implements OnInit {

  displayedColumns: string[] = ['action', 'name'];
  orderWorkshopStates: OrderWorkshopStateModel[];

  constructor(private orderWorkshopStateService: OrderWorkshopStateService) {
  }

  ngOnInit(): void {
    this.orderWorkshopStateService.requestList().toPromise().then(value => {
      this.orderWorkshopStates = (value as OrderWorkshopStateModel[]);
    }).catch(reason => alert(reason));
  }

  add(): void {
    this.orderWorkshopStateService.add();
  }

  show(orderWorkshopState: OrderWorkshopStateModel): void {
    this.orderWorkshopStateService.show(orderWorkshopState);
  }

}

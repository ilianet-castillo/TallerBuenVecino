import {Component, OnInit} from '@angular/core';
import {OrderWorkshopStateService} from '../order-workshop-state.service';
import {OrderWorkshopStateModel} from '../order-workshop-state.model';

@Component({
  selector: 'app-show-order-workshop-state',
  templateUrl: './show-order-workshop-state.component.html',
  styleUrls: ['./show-order-workshop-state.component.css']
})
export class ShowOrderWorkshopStateComponent implements OnInit {

  orderWorkshopState: OrderWorkshopStateModel;

  constructor(private orderWorkshopStateService: OrderWorkshopStateService) {
  }

  ngOnInit(): void {
    this.orderWorkshopStateService.requestGet().toPromise().then(value => {
      this.orderWorkshopState = value as OrderWorkshopStateModel;
    }).catch(reason => alert(reason));
  }

  edit(): void {
    this.orderWorkshopStateService.edit(this.orderWorkshopState);
  }

  cancel(): void {
    this.orderWorkshopStateService.list();
  }

}

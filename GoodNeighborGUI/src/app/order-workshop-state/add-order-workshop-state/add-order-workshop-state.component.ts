import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {OrderWorkshopStateService} from '../order-workshop-state.service';

@Component({
  selector: 'app-add-order-workshop-state',
  templateUrl: './add-order-workshop-state.component.html',
  styleUrls: ['./add-order-workshop-state.component.css']
})
export class AddOrderWorkshopStateComponent implements OnInit {

  addForm: FormGroup;

  constructor(private orderWorkshopStateService: OrderWorkshopStateService) {
  }

  ngOnInit(): void {
    this.addForm = this.orderWorkshopStateService.getForm();
  }

  onSubmit() {
    this.orderWorkshopStateService.requestAdd(this.addForm);
  }

  cancel(): void {
    this.orderWorkshopStateService.list();
  }

}

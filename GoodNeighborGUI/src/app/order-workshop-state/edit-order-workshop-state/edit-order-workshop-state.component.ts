import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {OrderWorkshopStateService} from '../order-workshop-state.service';

@Component({
  selector: 'app-edit-order-workshop-state',
  templateUrl: './edit-order-workshop-state.component.html',
  styleUrls: ['./edit-order-workshop-state.component.css']
})
export class EditOrderWorkshopStateComponent implements OnInit {

  editForm: FormGroup;

  constructor(private orderWorkshopStateService: OrderWorkshopStateService) {
  }

  ngOnInit(): void {
    this.editForm = this.orderWorkshopStateService.getForm();
    this.orderWorkshopStateService.requestGet().toPromise().then(value => {
      this.editForm.setValue(value);
    }).catch(reason => alert(reason));
  }

  onSubmit() {
    this.orderWorkshopStateService.requestUpdate(this.editForm);
  }

  cancel() {
    this.orderWorkshopStateService.show(this.editForm.value);
  }

}

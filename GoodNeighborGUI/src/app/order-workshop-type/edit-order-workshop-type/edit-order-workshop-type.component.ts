import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {OrderWorkshopTypeService} from '../order-workshop-type.service';

@Component({
  selector: 'app-edit-order-workshop-type',
  templateUrl: './edit-order-workshop-type.component.html',
  styleUrls: ['./edit-order-workshop-type.component.css']
})
export class EditOrderWorkshopTypeComponent implements OnInit {

  editForm: FormGroup;

  constructor(private orderWorkshopTypeService: OrderWorkshopTypeService) {
  }

  ngOnInit(): void {
    this.editForm = this.orderWorkshopTypeService.getForm();
    this.orderWorkshopTypeService.requestGet().toPromise().then(value => {
      this.editForm.setValue(value);
    }).catch(reason => alert(reason));
  }

  onSubmit() {
    this.orderWorkshopTypeService.requestUpdate(this.editForm);
  }

  cancel() {
    this.orderWorkshopTypeService.show(this.editForm.value);
  }

}

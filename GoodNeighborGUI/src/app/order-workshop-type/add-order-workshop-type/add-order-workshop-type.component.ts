import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {OrderWorkshopTypeService} from '../order-workshop-type.service';

@Component({
  selector: 'app-add-order-workshop-type',
  templateUrl: './add-order-workshop-type.component.html',
  styleUrls: ['./add-order-workshop-type.component.css']
})
export class AddOrderWorkshopTypeComponent implements OnInit {

  addForm: FormGroup;

  constructor(private orderWorkshopTypeService: OrderWorkshopTypeService) {
  }

  ngOnInit(): void {
    this.addForm = this.orderWorkshopTypeService.getForm();
  }

  onSubmit() {
    this.orderWorkshopTypeService.requestAdd(this.addForm);
  }

  cancel(): void {
    this.orderWorkshopTypeService.list();
  }

}

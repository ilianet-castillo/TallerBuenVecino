import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {OrderWorkshopService} from '../order-workshop.service';
import {EmployeeModel} from '../../employee/employee.model';
import {OrderWorkshopStateModel} from '../../order-workshop-state/order-workshop-state.model';
import {OrderWorkshopTypeModel} from '../../order-workshop-type/order-workshop-type.model';

@Component({
  selector: 'app-add-order-workshop',
  templateUrl: './add-order-workshop.component.html',
  styleUrls: ['./add-order-workshop.component.css']
})
export class AddOrderWorkshopComponent implements OnInit {

  addForm: FormGroup;
  orderWorkshopStates: OrderWorkshopStateModel[];
  orderWorkshopTypes: OrderWorkshopTypeModel[];
  employees: EmployeeModel[];

  constructor(private orderWorkshopService: OrderWorkshopService) {
    this.orderWorkshopService.getOrderWorkshopState().toPromise().then(value => {
      this.orderWorkshopStates = (value as OrderWorkshopStateModel[]).sort((a, b) => a.name > b.name ? 1 : -1);
    }).catch(reason => alert(reason));

    this.orderWorkshopService.getOrderWorkshopType().toPromise().then(value => {
      this.orderWorkshopTypes = (value as OrderWorkshopTypeModel[]).sort((a, b) => a.name > b.name ? 1 : -1);
    }).catch(reason => alert(reason));

    this.orderWorkshopService.getEmployee().toPromise().then(value => {
      this.employees = (value as EmployeeModel[]).sort((a, b) => a.name > b.name ? 1 : -1);
    }).catch(reason => alert(reason));
  }

  ngOnInit(): void {
    this.addForm = this.orderWorkshopService.getForm();
  }

  onSubmit() {
    this.orderWorkshopService.requestAdd(this.addForm);
  }

  getDate(): Date {
    return this.orderWorkshopService.getDate();
  }

  cancel(): void {
    this.orderWorkshopService.list();
  }

}

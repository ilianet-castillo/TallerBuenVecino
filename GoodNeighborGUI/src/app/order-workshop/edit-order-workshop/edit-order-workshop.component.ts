import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {OrderWorkshopService} from '../order-workshop.service';
import {EmployeeModel} from '../../employee/employee.model';
import {OrderWorkshopStateModel} from '../../order-workshop-state/order-workshop-state.model';
import {OrderWorkshopTypeModel} from '../../order-workshop-type/order-workshop-type.model';
import {OrderWorkshopModel} from '../order-workshop.model';

@Component({
  selector: 'app-edit-order-workshop',
  templateUrl: './edit-order-workshop.component.html',
  styleUrls: ['./edit-order-workshop.component.css']
})
export class EditOrderWorkshopComponent implements OnInit {

  editForm: FormGroup;
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
    this.editForm = this.orderWorkshopService.getForm();
    this.orderWorkshopService.requestGet().toPromise().then(value => {
      this.editForm.setValue(value);
    }).catch(reason => alert(reason));
  }

  onSubmit() {
    this.orderWorkshopService.requestUpdate(this.editForm);
  }

  getDate(): Date {
    return this.orderWorkshopService.getDate();
  }

  cancel(): void {
    this.orderWorkshopService.show(this.editForm.value);
  }

  isOrderWorkshopStateSelect(orderWorkshopState: OrderWorkshopStateModel): boolean {
    return (this.editForm.value as OrderWorkshopModel).orderWorkshopState.id === orderWorkshopState.id;
  }

  isOrderWorkshoptypeSelect(orderWorkshopType: OrderWorkshopTypeModel): boolean {
    return (this.editForm.value as OrderWorkshopModel).orderWorkshopType.id === orderWorkshopType.id;
  }

  isEmployeeSelect(employee: EmployeeModel): boolean {
    return (this.editForm.value as OrderWorkshopModel).employee.id === employee.id;
  }

}

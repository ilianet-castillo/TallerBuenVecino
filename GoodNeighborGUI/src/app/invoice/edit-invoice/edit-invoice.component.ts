import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {TypeModel} from '../../type/type.model';
import {ContactModel} from '../../contact/contact.model';
import {ClientModel} from '../../client/client.model';
import {VehicleModel} from '../../vehicle/vehicle.model';
import {EmployeeModel} from '../../employee/employee.model';
import {InvoiceService} from '../invoice.service';
import {InvoiceModel} from '../invoice.model';

@Component({
  selector: 'app-edit-invoice',
  templateUrl: './edit-invoice.component.html',
  styleUrls: ['./edit-invoice.component.css']
})
export class EditInvoiceComponent implements OnInit {

  editForm: FormGroup;
  types: TypeModel[];
  contacts: ContactModel[];
  clients: ClientModel[];
  vehicles: VehicleModel[];
  employees: EmployeeModel[];

  constructor(private invoiceService: InvoiceService) {
    this.invoiceService.getType().toPromise().then(value => {
      this.types = (value as TypeModel[]).sort((a, b) => a.type > b.type ? 1 : -1);
    }).catch(reason => alert(reason));

    this.invoiceService.getContact().toPromise().then(value => {
      this.contacts = (value as ContactModel[]).sort((a, b) => a.name > b.name ? 1 : -1);
    }).catch(reason => alert(reason));

    this.invoiceService.getClient().toPromise().then(value => {
      this.clients = (value as ClientModel[]).sort((a, b) => a.enterpriseName > b.enterpriseName ? 1 : -1);
    }).catch(reason => alert(reason));

    this.invoiceService.getEmployee().toPromise().then(value => {
      this.employees = (value as EmployeeModel[]).sort((a, b) => a.name > b.name ? 1 : -1);
    }).catch(reason => alert(reason));
  }

  ngOnInit(): void {
    this.editForm = this.invoiceService.getForm();
    this.invoiceService.requestGet().toPromise().then(value => {
      this.editForm.setValue(value);
    }).catch(reason => alert(reason));
  }

  onSubmit() {
    this.invoiceService.requestUpdate(this.editForm);
  }

  getDate(): Date {
    return this.invoiceService.getDate();
  }

  getVehicles(client: ClientModel) {
    this.vehicles = client.vehicles;
  }

  cancel(): void {
    this.invoiceService.show(this.editForm.value);
  }

  isTypeSelect(type: TypeModel): boolean {
    return (this.editForm.value as InvoiceModel).invoiceType.id === type.id;
  }

  isContactSelect(contact: ContactModel): boolean {
    return (this.editForm.value as InvoiceModel).contact.id === contact.id;
  }

  isClientSelect(client: ClientModel): boolean {
    return (this.editForm.value as InvoiceModel).activityClient.id === client.id;
  }

  isVehicleSelect(vehicle: VehicleModel): boolean {
    return (this.editForm.value as InvoiceModel).activityVehicle.id === vehicle.id;
  }

  isEmployeeInvoiceSelect(employee: EmployeeModel): boolean {
    return (this.editForm.value as InvoiceModel).employeeInvoice.id === employee.id;
  }

  isEmployeeReceiveSelect(employee: EmployeeModel): boolean {
    return (this.editForm.value as InvoiceModel).employeeReceive.id === employee.id;
  }

}

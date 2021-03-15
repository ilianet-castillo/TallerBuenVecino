import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {TypeModel} from '../../type/type.model';
import {ContactModel} from '../../contact/contact.model';
import {ClientModel} from '../../client/client.model';
import {VehicleModel} from '../../vehicle/vehicle.model';
import {EmployeeModel} from '../../employee/employee.model';
import {InvoiceService} from '../invoice.service';

@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.css']
})
export class AddInvoiceComponent implements OnInit {

  addForm: FormGroup;
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
    this.addForm = this.invoiceService.getForm();
  }

  onSubmit() {
    this.invoiceService.requestAdd(this.addForm);
  }

  getDate(): Date {
    return this.invoiceService.getDate();
  }

  getVehicles(client: ClientModel) {
    this.vehicles = client.vehicles;
  }

  cancel(): void {
    this.invoiceService.list();
  }

}

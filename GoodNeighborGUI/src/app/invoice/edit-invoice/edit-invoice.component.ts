import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Type} from '../../type/type.model';
import {Contact} from '../../contact/contact.model';
import {Activity} from '../../activity/activity.model';
import {Employee} from '../../employee/employee.model';
import {Client} from '../../client/client.model';
import {InvoiceService} from '../invoice.service';
import {Invoice} from '../invoice.model';

@Component({
  selector: 'app-edit-invoice',
  templateUrl: './edit-invoice.component.html',
  styleUrls: ['./edit-invoice.component.css']
})
export class EditInvoiceComponent implements OnInit {

  editForm: FormGroup;
  types: Type[];
  contacts: Contact[];
  activities: Activity[];
  employees: Employee[];
  clients: Client[];

  constructor(private invoiceService: InvoiceService) {

    this.invoiceService.getType().toPromise().then(value => {
      this.types = (value as Type[]).sort((a, b) => a.type > b.type ? 1 : -1);
    }).catch(reason => alert(reason));

    this.invoiceService.getContact().toPromise().then(value => {
      this.contacts = (value as Contact[]).sort((a, b) => a.name > b.name ? 1 : -1);
    }).catch(reason => alert(reason));


    this.invoiceService.getActivity().toPromise().then(value => {
      this.activities = (value as Activity[]).sort((a, b) => a.name > b.name ? 1 : -1);
    }).catch(reason => alert(reason));

    this.invoiceService.getEmployee().toPromise().then(value => {
      this.employees = (value as Employee[]).sort((a, b) => a.name > b.name ? 1 : -1);
    }).catch(reason => alert(reason));


    this.invoiceService.getClient().toPromise().then(value => {
      this.clients = (value as Client[]).sort((a, b) => a.enterpriseName > b.enterpriseName ? 1 : -1);
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

  cancel(): void {
    this.invoiceService.show(this.editForm.value);
  }

  isTypeSelect(type: Type): boolean {
    return (this.editForm.value as Invoice).type.id === type.id;
  }

  isContactSelect(contact: Contact): boolean {
    return (this.editForm.value as Invoice).contact.id === contact.id;
  }

  isActivitySelect(activity: Activity): boolean {
    return (this.editForm.value as Invoice).activity.id === activity.id;
  }

  isEmployeeSelect(employee: Employee): boolean {
    return (this.editForm.value as Invoice).employee.id === employee.id;
  }

  isClientSelect(client: Client): boolean {
    return (this.editForm.value as Invoice).client.id === client.id;
  }

}

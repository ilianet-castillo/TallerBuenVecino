import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Type} from '../../type/type.model';
import {Contact} from '../../contact/contact.model';
import {Activity} from '../../activity/activity.model';
import {Employee} from '../../employee/employee.model';
import {Client} from '../../client/client.model';
import {InvoiceService} from '../invoice.service';

@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.css']
})
export class AddInvoiceComponent implements OnInit {
  addForm: FormGroup;
  types: Type[];
  contacts: Contact[];
  activitys: Activity[];
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
      this.activitys = (value as Activity[]).sort((a, b) => a.name > b.name ? 1 : -1);
    }).catch(reason => alert(reason));

    this.invoiceService.getEmployee().toPromise().then(value => {
      this.employees = (value as Employee[]).sort((a, b) => a.name > b.name ? 1 : -1);
    }).catch(reason => alert(reason));

    this.invoiceService.getClient().toPromise().then(value => {
      this.clients = (value as Client[]).sort((a, b) => a.enterpriseName > b.enterpriseName ? 1 : -1);
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

  cancel(): void {
    this.invoiceService.list();
  }
}

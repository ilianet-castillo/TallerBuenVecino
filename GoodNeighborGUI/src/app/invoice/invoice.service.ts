import {Injectable} from '@angular/core';
import {ApiService} from '../api.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {TypeService} from '../type/type.service';
import {ContactService} from '../contact/contact.service';
import {ActivityService} from '../activity/activity.service';
import {EmployeeService} from '../employee/employee.service';
import {ClientService} from '../client/client.service';
import {Observable} from 'rxjs';
import {Invoice} from './invoice.model';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  url = 'invoice/';

  constructor(private apiService: ApiService,
              private formBuilder: FormBuilder,
              private router: Router, private typeService: TypeService,
              private contactService: ContactService,
              private activityService: ActivityService,
              private employeeService: EmployeeService,
              private clientService: ClientService) {
  }

  getForm(): FormGroup {
    return this.formBuilder.group({
      id: [''],
      date: ['', Validators.required],
      signature: ['', Validators.required],
      type: ['', Validators.required],
      contact: ['', Validators.required],
      activity: ['', Validators.required],
      employee: ['', Validators.required],
      client: ['', Validators.required]
    });
  }

  getDate(): Date {
    return new Date();
  }

  // ApiService
  requestList(): Observable<any> {
    return this.apiService.sendGetRequest(this.url);
  }

  requestAdd(addForm: FormGroup): void {
    if (addForm.invalid) {
      alert('Campos obligatorios sin llenar');
      return;
    }

    if (confirm('¿Desea adicionar la factura ' + (addForm.value as Invoice).date + '?')) {
      this.apiService.sendPostRequest(this.url, addForm.value).toPromise().then(value => {
        alert('Factura' + (value as Invoice).date + 'Adicionada satisfactoriamente');
        this.list();
      }).catch(reason => alert(reason));

    }
  }

  requestGet(): Observable<any> {
    const invoiceId = window.localStorage.getItem('invoiceId');
    if (!invoiceId) {
      alert('Acción inválida.');
      this.list();
      return;
    }

    return this.apiService.sendGetRequestById(this.url, +invoiceId);
  }

  requestUpdate(editForm: FormGroup) {
    if (editForm.invalid) {
      alert('Campos Obligatorios sin llenar');
      return;
    }

    if (confirm('¿Desea actualizar la factura ' + (editForm.value as Invoice).date + '?')) {
      this.apiService.sendPutRequest(this.url, editForm.value).toPromise().then(value => {
        alert('Factura' + (value as Invoice).date + 'actualizada satisfactoriamente');
        this.show(value);
      }).catch(reason => alert(reason));
    }
  }

  // Router
  list(): void {
    this.router.navigate(['list-invoice']);
  }

  add(): void {
    this.router.navigate(['add-invoice']);
  }

  show(invoice: Invoice): void {
    window.localStorage.removeItem('invoiceId');
    window.localStorage.setItem('invoiceId', invoice.id.toString());
    this.router.navigate(['show-invoice']);
  }

  edit(invoice: Invoice): void {
    window.localStorage.removeItem('invoiceId');
    window.localStorage.setItem('invoiceId', invoice.id.toString());
    this.router.navigate(['edit-invoice']);
  }

  getType(): Observable<any> {
    return this.typeService.requestList();
  }

  getContact(): Observable<any> {
    return this.contactService.requestList();
  }

  getActivity(): Observable<any> {
    return this.activityService.requestList();
  }

  getEmployee(): Observable<any> {
    return this.employeeService.requestList();
  }

  getClient(): Observable<any> {
    return this.clientService.requestList();
  }

}

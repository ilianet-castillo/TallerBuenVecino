import {Injectable} from '@angular/core';
import {ApiService} from '../api.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {TypeService} from '../type/type.service';
import {ContactService} from '../contact/contact.service';
import {ClientService} from '../client/client.service';
import {EmployeeService} from '../employee/employee.service';
import {Observable} from 'rxjs';
import {InvoiceModel} from './invoice.model';
import {saveAs} from '../../../node_modules/file-saver';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  url = 'invoice/';

  constructor(private apiService: ApiService,
              private formBuilder: FormBuilder,
              private router: Router,
              private typeService: TypeService,
              private contactService: ContactService,
              private clientService: ClientService,
              private employeeService: EmployeeService) {
  }

  getForm(): FormGroup {
    return this.formBuilder.group({
      jsonId: [''],
      id: [''],
      invoiceType: ['', Validators.required],
      contact: ['', Validators.required],
      activityClient: ['', Validators.required],
      activityVehicle: ['', Validators.required],
      activityReferenceOt: ['', Validators.required],
      activityDate: [''],
      descriptions: [''],
      employeeInvoice: ['', Validators.required]
    });
  }

  // ApiService
  requestList(): Observable<any> {
    return this.apiService.sendGetRequest(this.url);
  }

  requestAdd(addForm: FormGroup): void {
    if (addForm.invalid) {
      alert('Campos obligatorios sin llenar.');
      return;
    }

    if (confirm('¿Desea adicionar la factura ' + (addForm.value as InvoiceModel).id + '?')) {
      (addForm.value as InvoiceModel).jsonId = Math.random();
      (addForm.value as InvoiceModel).descriptions = [];
      this.apiService.sendPostRequest(this.url, addForm.value).toPromise().then(value => {
        alert('Factura ' + (value as InvoiceModel).id + ' adicionada satisfactoriamente');
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
      alert('Campos Obligatorios sin llenar.');
      return;
    }

    if (confirm('¿Desea actualizar la factura ' + (editForm.value as InvoiceModel).id + '?')) {
      this.apiService.sendPutRequest(this.url, editForm.value).toPromise().then(value => {
        alert('Factura ' + (value as InvoiceModel).id + ' actualizada satisfactoriamente');
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

  show(invoice: InvoiceModel): void {
    window.localStorage.removeItem('invoiceId');
    window.localStorage.setItem('invoiceId', invoice.id.toString());
    this.router.navigate(['show-invoice']);
  }

  edit(invoice: InvoiceModel): void {
    window.localStorage.removeItem('invoiceId');
    window.localStorage.setItem('invoiceId', invoice.id.toString());
    this.router.navigate(['edit-invoice']);
  }

  getInvoicePDF(invoiceId: number): void {
    const mediaType = 'application/pdf';
    this.apiService.sendRequestPDF(this.url, invoiceId.toString()).toPromise().then(value => {
      const blob = new Blob([value], {type: mediaType});
      saveAs(blob, 'Factura de servicio.pdf');
    }).catch(reason => alert(reason));
  }

  getType(): Observable<any> {
    return this.typeService.requestList();
  }

  getContact(): Observable<any> {
    return this.contactService.requestList();
  }

  getClient(): Observable<any> {
    return this.clientService.requestList();
  }

  getEmployee(): Observable<any> {
    return this.employeeService.requestList();
  }

}

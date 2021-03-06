import {Injectable} from '@angular/core';
import {ApiService} from '../api.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {InvoiceService} from '../invoice/invoice.service';
import {Observable} from 'rxjs';
import {DescriptionModel} from './description.model';

@Injectable({
  providedIn: 'root'
})
export class DescriptionService {

  url = 'description/';

  constructor(private apiService: ApiService,
              private formBuilder: FormBuilder,
              private router: Router,
              private invoiceService: InvoiceService) {
  }

  getForm(): FormGroup {
    return this.formBuilder.group({
      id: [''],
      workDescription: ['', Validators.required],
      amount: ['', Validators.required],
      invoice: ['', Validators.required]
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

    if (confirm('¿Desea adicionar la descripción ' + (addForm.value as DescriptionModel).workDescription + '?')) {
      this.apiService.sendPostRequest(this.url, addForm.value).toPromise().then(value => {
        alert('Descripción ' + (value as DescriptionModel).workDescription + ' adicionada satisfactoriamente');
        this.list();
      }).catch(reason => alert(reason));

    }
  }

  requestGet(): Observable<any> {
    const descriptionId = window.localStorage.getItem('descriptionId');
    if (!descriptionId) {
      alert('Acción inválida.');
      this.list();
      return;
    }

    return this.apiService.sendGetRequestById(this.url, +descriptionId);
  }

  requestUpdate(editForm: FormGroup) {
    if (editForm.invalid) {
      alert('Campos Obligatorios sin llenar.');
      return;
    }

    if (confirm('¿Desea actualizar la descripción ' + (editForm.value as DescriptionModel).workDescription + '?')) {
      this.apiService.sendPutRequest(this.url, editForm.value).toPromise().then(value => {
        alert('Descripción ' + (value as DescriptionModel).workDescription + ' actualizada satisfactoriamente');
        this.show(value);
      }).catch(reason => alert(reason));
    }
  }

  // Router
  list(): void {
    this.router.navigate(['list-description']);
  }

  add(): void {
    this.router.navigate(['add-description']);
  }

  show(description: DescriptionModel): void {
    window.localStorage.removeItem('descriptionId');
    window.localStorage.setItem('descriptionId', description.id.toString());
    this.router.navigate(['show-description']);
  }

  edit(description: DescriptionModel): void {
    window.localStorage.removeItem('descriptionId');
    window.localStorage.setItem('descriptionId', description.id.toString());
    this.router.navigate(['edit-description']);
  }

  getInvoice(): Observable<any> {
    return this.invoiceService.requestList();
  }

}

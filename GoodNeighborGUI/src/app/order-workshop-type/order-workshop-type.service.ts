import {Injectable} from '@angular/core';
import {ApiService} from '../api.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {OrderWorkshopTypeModel} from './order-workshop-type.model';

@Injectable({
  providedIn: 'root'
})
export class OrderWorkshopTypeService {

  url = 'order_workshop_type/';

  constructor(private apiService: ApiService,
              private formBuilder: FormBuilder,
              private router: Router) {
  }

  getForm(): FormGroup {
    return this.formBuilder.group({
      id: [''],
      name: ['', Validators.required]
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
    if (confirm('¿Desea adicionar el tipo de orden de taller ' + (addForm.value as OrderWorkshopTypeModel).name + '?')) {
      this.apiService.sendPostRequest(this.url, addForm.value).toPromise().then(value => {
        alert('Estado de tipo de taller ' + (value as OrderWorkshopTypeModel).name + ' adicionado satisfactoriamente.');
        this.list();
      }).catch(reason => alert(reason));

    }
  }

  requestGet(): Observable<any> {
    const orderWorkshopTypeId = window.localStorage.getItem('orderWorkshopTypeId');
    if (!orderWorkshopTypeId) {
      alert('Acción inválida.');
      this.list();
      return;
    }

    return this.apiService.sendGetRequestById(this.url, +orderWorkshopTypeId);
  }

  requestUpdate(editForm: FormGroup) {
    if (editForm.invalid) {
      alert('Campos Obligatorios sin llenar.');
      return;
    }

    if (confirm('¿Desea actualizar el tipo de orden de taller ' + (editForm.value as OrderWorkshopTypeModel).name + '?')) {
      this.apiService.sendPutRequest(this.url, editForm.value).toPromise().then(value => {
        alert('Estado de tipo de taller ' + (value as OrderWorkshopTypeModel).name + ' actualizado satisfactoriamente.');
        this.show(value);
      }).catch(reason => alert(reason));
    }
  }

  // Router
  list(): void {
    this.router.navigate(['list-order-workshop-type']);
  }

  add(): void {
    this.router.navigate(['add-order-workshop-type']);
  }

  show(orderWorkshopType: OrderWorkshopTypeModel): void {
    window.localStorage.removeItem('orderWorkshopTypeId');
    window.localStorage.setItem('orderWorkshopTypeId', orderWorkshopType.id.toString());
    this.router.navigate(['show-order-workshop-type']);
  }

  edit(orderWorkshopType: OrderWorkshopTypeModel): void {
    window.localStorage.removeItem('orderWorkshopTypeId');
    window.localStorage.setItem('orderWorkshopTypeId', orderWorkshopType.id.toString());
    this.router.navigate(['edit-order-workshop-type']);
  }

}

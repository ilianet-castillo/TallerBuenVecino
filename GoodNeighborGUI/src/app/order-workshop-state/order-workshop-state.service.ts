import {Injectable} from '@angular/core';
import {ApiService} from '../api.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {OrderWorkshopStateModel} from './order-workshop-state.model';

@Injectable({
  providedIn: 'root'
})
export class OrderWorkshopStateService {

  url = 'order_workshop_state/';

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
    if (confirm('¿Desea adicionar el estado de orden de taller ' + (addForm.value as OrderWorkshopStateModel).name + '?')) {
      this.apiService.sendPostRequest(this.url, addForm.value).toPromise().then(value => {
        alert('Estado de orden de taller ' + (value as OrderWorkshopStateModel).name + ' adicionado satisfactoriamente.');
        this.list();
      }).catch(reason => alert(reason));

    }
  }

  requestGet(): Observable<any> {
    const orderWorkshopStateId = window.localStorage.getItem('orderWorkshopStateId');
    if (!orderWorkshopStateId) {
      alert('Acción inválida.');
      this.list();
      return;
    }

    return this.apiService.sendGetRequestById(this.url, +orderWorkshopStateId);
  }

  requestUpdate(editForm: FormGroup) {
    if (editForm.invalid) {
      alert('Campos Obligatorios sin llenar.');
      return;
    }

    if (confirm('¿Desea actualizar el estado de orden de taller ' + (editForm.value as OrderWorkshopStateModel).name + '?')) {
      this.apiService.sendPutRequest(this.url, editForm.value).toPromise().then(value => {
        alert('Estado de orden de taller ' + (value as OrderWorkshopStateModel).name + ' actualizado satisfactoriamente.');
        this.show(value);
      }).catch(reason => alert(reason));
    }
  }

  // Router
  list(): void {
    this.router.navigate(['list-order-workshop-state']);
  }

  add(): void {
    this.router.navigate(['add-order-workshop-state']);
  }

  show(orderWorkshopState: OrderWorkshopStateModel): void {
    window.localStorage.removeItem('orderWorkshopStateId');
    window.localStorage.setItem('orderWorkshopStateId', orderWorkshopState.id.toString());
    this.router.navigate(['show-order-workshop-state']);
  }

  edit(orderWorkshopState: OrderWorkshopStateModel): void {
    window.localStorage.removeItem('orderWorkshopStateId');
    window.localStorage.setItem('orderWorkshopStateId', orderWorkshopState.id.toString());
    this.router.navigate(['edit-order-workshop-state']);
  }

}

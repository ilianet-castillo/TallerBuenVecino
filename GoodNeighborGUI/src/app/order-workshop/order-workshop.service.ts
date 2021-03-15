import {Injectable} from '@angular/core';
import {ApiService} from '../api.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {EmployeeService} from '../employee/employee.service';
import {Observable} from 'rxjs';
import {OrderWorkshopModel} from './order-workshop.model';
import {OrderWorkshopStateService} from '../order-workshop-state/order-workshop-state.service';
import {OrderWorkshopTypeService} from '../order-workshop-type/order-workshop-type.service';

@Injectable({
  providedIn: 'root'
})
export class OrderWorkshopService {

  url = 'orderworkshop/';

  constructor(private apiService: ApiService,
              private formBuilder: FormBuilder,
              private router: Router,
              private orderWorkshopStateService: OrderWorkshopStateService,
              private orderWorkshopTypeService: OrderWorkshopTypeService,
              private employeeService: EmployeeService) {
  }

  getForm(): FormGroup {
    return this.formBuilder.group({
      id: [''],
      dateEntrance: [''],
      dateExit: [''],
      orderWorkshopState: ['', Validators.required],
      orderWorkshopType: ['', Validators.required],
      employee: ['', Validators.required],
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

    if (confirm('¿Desea adicionar la orden del taller ' + (addForm.value as OrderWorkshopModel).id + '?')) {
      (addForm.value as OrderWorkshopModel).dateEntrance = new Date();
      this.apiService.sendPostRequest(this.url, addForm.value).toPromise().then(value => {
        alert('Orden del taller' + (value as OrderWorkshopModel).id + ' adicionada satisfactoriamente');
        this.list();
      }).catch(reason => alert(reason));

    }
  }

  requestGet(): Observable<any> {
    const orderWorkshopId = window.localStorage.getItem('orderWorkshopId');
    if (!orderWorkshopId) {
      alert('Acción inválida.');
      this.list();
      return;
    }

    return this.apiService.sendGetRequestById(this.url, +orderWorkshopId);
  }

  requestUpdate(editForm: FormGroup) {
    if (editForm.invalid) {
      alert('Campos Obligatorios sin llenar');
      return;
    }

    if (confirm('¿Desea actualizar la ordel del taller ' + (editForm.value as OrderWorkshopModel).id + '?')) {
      this.apiService.sendPutRequest(this.url, editForm.value).toPromise().then(value => {
        alert('Orden del taller ' + (value as OrderWorkshopModel).id + ' actualizada satisfactoriamente');
        this.show(value);
      }).catch(reason => alert(reason));
    }
  }

  // Router
  list(): void {
    this.router.navigate(['list-order-workshop']);
  }

  add(): void {
    this.router.navigate(['add-order-workshop']);
  }

  show(orderWorkshop: OrderWorkshopModel): void {
    window.localStorage.removeItem('orderWorkshopId');
    window.localStorage.setItem('orderWorkshopId', orderWorkshop.id.toString());
    this.router.navigate(['show-order-workshop']);
  }

  edit(orderWorkshop: OrderWorkshopModel): void {
    window.localStorage.removeItem('orderWorkshopId');
    window.localStorage.setItem('orderWorkshopId', orderWorkshop.id.toString());
    this.router.navigate(['edit-order-workshop']);
  }

  getOrderWorkshopState(): Observable<any> {
    return this.orderWorkshopStateService.requestList();
  }

  getOrderWorkshopType(): Observable<any> {
    return this.orderWorkshopTypeService.requestList();
  }

  getEmployee(): Observable<any> {
    return this.employeeService.requestList();
  }

}

import {Injectable} from '@angular/core';
import {ApiService} from '../api.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ClientService} from '../client/client.service';
import {Observable} from 'rxjs';
import {VehicleModel} from './vehicle.model';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  url = 'vehicle/';

  constructor(private apiService: ApiService,
              private formBuilder: FormBuilder,
              private router: Router,
              private clientService: ClientService) {
  }

  getForm(): FormGroup {
    return this.formBuilder.group({
      id: [''],
      markModel: ['', Validators.required],
      sheet: ['', Validators.required],
      color: ['', Validators.required],
      comments: ['', Validators.required],
      client: ['', Validators.required]
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

    if (confirm('¿Desea adicionar el vehiculo ' + (addForm.value as VehicleModel).markModel + '?')) {
      this.apiService.sendPostRequest(this.url, addForm.value).toPromise().then(value => {
        alert('Vehículo ' + (value as VehicleModel).markModel + ' adicionado satisfactoriamente');
        this.list();
      }).catch(reason => alert(reason));

    }
  }

  requestGet(): Observable<any> {
    const vehicleId = window.localStorage.getItem('vehicleId');
    if (!vehicleId) {
      alert('Acción inválida.');
      this.list();
      return;
    }

    return this.apiService.sendGetRequestById(this.url, +vehicleId);
  }

  requestUpdate(editForm: FormGroup) {
    if (editForm.invalid) {
      alert('Campos Obligatorios sin llenar');
      return;
    }

    if (confirm('¿Desea actualizar el vehículo ' + (editForm.value as VehicleModel).markModel + '?')) {
      this.apiService.sendPutRequest(this.url, editForm.value).toPromise().then(value => {
        alert('Vehiculo ' + (value as VehicleModel).markModel + ' actualizado satisfactoriamente');
        this.show(value);
      }).catch(reason => alert(reason));
    }
  }

  // Router
  list(): void {
    this.router.navigate(['list-vehicle']);
  }

  add(): void {
    this.router.navigate(['add-vehicle']);
  }

  show(vehicle: VehicleModel): void {
    window.localStorage.removeItem('vehicleId');
    window.localStorage.setItem('vehicleId', vehicle.id.toString());
    this.router.navigate(['show-vehicle']);
  }

  edit(vehicle: VehicleModel): void {
    window.localStorage.removeItem('vehicleId');
    window.localStorage.setItem('vehicleId', vehicle.id.toString());
    this.router.navigate(['edit-vehicle']);
  }

  getClient(): Observable<any> {
    return this.clientService.requestList();
  }

}

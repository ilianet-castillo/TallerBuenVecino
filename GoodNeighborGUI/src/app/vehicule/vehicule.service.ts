import {Injectable} from '@angular/core';
import {ApiService} from '../api.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ClientService} from '../client/client.service';
import {Observable} from 'rxjs';
import {Vehicule} from './vehicule.model';

@Injectable({
  providedIn: 'root'
})
export class VehiculeService {
  url = 'vehicule/';

  constructor(private apiService: ApiService,
              private formBuilder: FormBuilder,
              private router: Router, private clientService: ClientService) {
  }

  getForm(): FormGroup {
    return this.formBuilder.group({
      id: [''],
      markModel: ['', Validators.required],
      sheet: ['', Validators.required],
      km: ['', Validators.required],
      color: ['', Validators.required],
      coment: ['', Validators.required],
      client: ['', Validators.required]
    });
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

    if (confirm('¿Desea adicionar el vehiculo ' + (addForm.value as Vehicule).markModel + '?')) {
      this.apiService.sendPostRequest(this.url, addForm.value).toPromise().then(value => {
        alert('Vehículo' + (value as Vehicule).markModel + 'Adicionado satisfactoriamente');
        this.list();
      }).catch(reason => alert(reason));

    }
  }

  requestGet(): Observable<any> {
    const vehiculeId = window.localStorage.getItem('vehiculeId');
    if (!vehiculeId) {
      alert('Acción inválida.');
      this.list();
      return;
    }

    return this.apiService.sendGetRequestById(this.url, +vehiculeId);
  }

  requestUpdate(editForm: FormGroup) {
    if (editForm.invalid) {
      alert('Campos Obligatorios sin llenar');
      return;
    }

    if (confirm('¿Desea actualizar el vehículo ' + (editForm.value as Vehicule).markModel + '?')) {
      this.apiService.sendPutRequest(this.url, editForm.value).toPromise().then(value => {
        alert('Vehiculo ' + (value as Vehicule).markModel + 'actualizado satisfactoriamente');
        this.show(value);
      }).catch(reason => alert(reason));
    }
  }

  // Router
  list(): void {
    this.router.navigate(['list-vehicule']);
  }

  add(): void {
    this.router.navigate(['add-vehicule']);
  }

  show(vehicule: Vehicule): void {
    window.localStorage.removeItem('vehiculeId');
    window.localStorage.setItem('vehiculeId', vehicule.id.toString());
    this.router.navigate(['show-vehicule']);
  }

  edit(vehicule: Vehicule): void {
    window.localStorage.removeItem('vehiculeId');
    window.localStorage.setItem('vehiculeId', vehicule.id.toString());
    this.router.navigate(['edit-vehicule']);
  }

  getClient(): Observable<any> {
    return this.clientService.requestList();
  }
}

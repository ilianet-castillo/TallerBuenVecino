import { Injectable } from '@angular/core';
import {ApiService} from '../api.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {PositionService} from '../position/position.service';
import {ProvinceService} from '../province/province.service';
import {ClientService} from '../client/client.service';
import {CoinService} from '../coin/coin.service';
import {Observable} from 'rxjs';
import {Activity} from './activity.model';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  url = 'activity/';

  constructor(private apiService: ApiService,
              private formBuilder: FormBuilder,
              private router: Router,
              private clientService: ClientService,
              private coinService: CoinService) { }

  getForm(): FormGroup {
    return this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      noInvoice: ['', Validators.required],
      noReferenceOt: ['', Validators.required],
      referenceOt: ['', Validators.required],
      date: ['', Validators.required],
      client: ['', Validators.required],
      coin: ['', Validators.required]
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

    if (confirm('¿Desea adicionar la actividad ' + (addForm.value as Activity).name + '?')) {
      this.apiService.sendPostRequest(this.url, addForm.value).toPromise().then(value => {
        alert('Actividad' + (value as Activity).name + 'Adicionada satisfactoriamente');
        this.list();
      }).catch(reason => alert(reason));

    }
  }

  requestGet(): Observable<any> {
    const activityId = window.localStorage.getItem('activityId');
    if (!activityId) {
      alert('Acción inválida.');
      this.list();
      return;
    }

    return this.apiService.sendGetRequestById(this.url, +activityId);
  }

  requestUpdate(editForm: FormGroup) {
    if (editForm.invalid) {
      alert('Campos Obligatorios sin llenar');
      return;
    }

    if (confirm('¿Desea actualizar la actividad ' + (editForm.value as Activity).name + '?')) {
      this.apiService.sendPutRequest(this.url, editForm.value).toPromise().then(value => {
        alert('Actividad ' + (value as Activity).name + 'actualizada satisfactoriamente');
        this.show(value);
      }).catch(reason => alert(reason));
    }
  }

  // Router
  list(): void {
    this.router.navigate(['list-activity']);
  }

  add(): void {
    this.router.navigate(['add-activity']);
  }

  show(activity: Activity): void {
    window.localStorage.removeItem('activityId');
    window.localStorage.setItem('activityId', activity.id.toString());
    this.router.navigate(['show-activity']);
  }

  edit(activity: Activity): void {
    window.localStorage.removeItem('activityId');
    window.localStorage.setItem('activityId', activity.id.toString());
    this.router.navigate(['edit-activity']);
  }

  getClient(): Observable<any> {
    return this.clientService.requestList();
  }

  getCoin(): Observable<any> {
    return this.coinService.requestList();
  }

}

import {Injectable} from '@angular/core';
import {ApiService} from '../api.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {PositionService} from '../position/position.service';
import {Observable} from 'rxjs';
import {Client} from './client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  url = 'client/';

  constructor(private apiService: ApiService,
              private formBuilder: FormBuilder,
              private router: Router,
              private positionService: PositionService) {
  }

  getForm(): FormGroup {
    return this.formBuilder.group({
      id: [''],
      enterpriseName: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]*$/), Validators.minLength(8), Validators.maxLength(8)]],
      comment: ['', Validators.required],
      address: ['', Validators.required],
      position: ['', Validators.required]
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

    if (confirm('¿Desea adicionar el cliente ' + (addForm.value as Client).enterpriseName + '?')) {
      this.apiService.sendPostRequest(this.url, addForm.value).toPromise().then(value => {
        alert('Cliente' + (value as Client).enterpriseName + 'Adicionado satisfactoriamente');
        this.list();
      }).catch(reason => alert(reason));

    }
  }

  requestGet(): Observable<any> {
    const clientId = window.localStorage.getItem('clientId');
    if (!clientId) {
      alert('Acción inválida.');
      this.list();
      return;
    }

    return this.apiService.sendGetRequestById(this.url, +clientId);
  }

  requestUpdate(editForm: FormGroup) {
    if (editForm.invalid) {
      alert('Campos Obligatorios sin llenar');
      return;
    }

    if (confirm('¿Desea actualizar el cliente ' + (editForm.value as Client).enterpriseName + '?')) {
      this.apiService.sendPutRequest(this.url, editForm.value).toPromise().then(value => {
        alert('Cliente ' + (value as Client).enterpriseName + 'actualizado satisfactoriamente');
        this.show(value);
      }).catch(reason => alert(reason));
    }
  }

  // Router
  list(): void {
    this.router.navigate(['list-client']);
  }

  add(): void {
    this.router.navigate(['add-client']);
  }

  show(client: Client): void {
    window.localStorage.removeItem('clientId');
    window.localStorage.setItem('clientId', client.id.toString());
    this.router.navigate(['show-client']);
  }

  edit(client: Client): void {
    window.localStorage.removeItem('clientId');
    window.localStorage.setItem('clientId', client.id.toString());
    this.router.navigate(['edit-client']);
  }

  getPosition(): Observable<any> {
    return this.positionService.requestList();
  }


}

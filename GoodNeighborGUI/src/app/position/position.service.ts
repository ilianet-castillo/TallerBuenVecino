import {Injectable} from '@angular/core';
import {ApiService} from '../api.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {PositionModel} from './position.model';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  url = 'position/';

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
    if (confirm('¿Desea adicionar el cargo ' + (addForm.value as PositionModel).name + '?')) {
      this.apiService.sendPostRequest(this.url, addForm.value).toPromise().then(value => {
        alert('Cargo ' + (value as PositionModel).name + ' adicionado satisfactoriamente.');
        this.list();
      }).catch(reason => alert(reason));

    }
  }

  requestGet(): Observable<any> {
    const positionId = window.localStorage.getItem('positionId');
    if (!positionId) {
      alert('Acción inválida.');
      this.list();
      return;
    }

    return this.apiService.sendGetRequestById(this.url, +positionId);
  }

  requestUpdate(editForm: FormGroup) {
    if (editForm.invalid) {
      alert('Campos obligatorios sin llenar.');
      return;
    }

    if (confirm('¿Desea actualizar el cargo ' + (editForm.value as PositionModel).name + '?')) {
      this.apiService.sendPutRequest(this.url, editForm.value).toPromise().then(value => {
        alert('Position ' + (value as PositionModel).name + ' actualizado satisfactoriamente.');
        this.show(value);
      }).catch(reason => alert(reason));
    }
  }

  // Router
  list(): void {
    this.router.navigate(['list-position']);
  }

  add(): void {
    this.router.navigate(['add-position']);
  }

  show(position: PositionModel): void {
    window.localStorage.removeItem('positionId');
    window.localStorage.setItem('positionId', position.id.toString());
    this.router.navigate(['show-position']);
  }

  edit(position: PositionModel): void {
    window.localStorage.removeItem('positionId');
    window.localStorage.setItem('positionId', position.id.toString());
    this.router.navigate(['edit-position']);
  }

}

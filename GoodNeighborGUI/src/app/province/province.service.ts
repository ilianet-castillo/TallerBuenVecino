import {Injectable} from '@angular/core';
import {ApiService} from '../api.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {ProvinceModel} from './province.model';

@Injectable({
  providedIn: 'root'
})
export class ProvinceService {

  url = 'province/';

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

    if (confirm('¿Desea adicionar la provincia ' + (addForm.value as ProvinceModel).name + '?')) {
      this.apiService.sendPostRequest(this.url, addForm.value).toPromise().then(value => {
        alert('Provincia ' + (value as ProvinceModel).name + ' adicionada satisfactoriamente.');
        this.list();
      }).catch(reason => alert(reason));
    }
  }

  requestGet(): Observable<any> {
    const provinceId = window.localStorage.getItem('provinceId');
    if (!provinceId) {
      alert('Acción inválida.');
      this.list();
      return;
    }

    return this.apiService.sendGetRequestById(this.url, +provinceId);
  }

  requestUpdate(editForm: FormGroup) {
    if (editForm.invalid) {
      alert('Campos obligatorios sin llenar.');
      return;
    }

    if (confirm('¿Desea actualizar la provincia ' + (editForm.value as ProvinceModel).name + '?')) {
      this.apiService.sendPutRequest(this.url, editForm.value).toPromise().then(value => {
        alert('ProvinceModel ' + (value as ProvinceModel).name + ' actualizada satisfactoriamente.');
        this.show(value);
      }).catch(reason => alert(reason));
    }
  }

  // Router
  list(): void {
    this.router.navigate(['list-province']);
  }

  add(): void {
    this.router.navigate(['add-province']);
  }

  show(province: ProvinceModel): void {
    window.localStorage.removeItem('provinceId');
    window.localStorage.setItem('provinceId', province.id.toString());
    this.router.navigate(['show-province']);
  }

  edit(province: ProvinceModel): void {
    window.localStorage.removeItem('provinceId');
    window.localStorage.setItem('provinceId', province.id.toString());
    this.router.navigate(['edit-province']);
  }

}

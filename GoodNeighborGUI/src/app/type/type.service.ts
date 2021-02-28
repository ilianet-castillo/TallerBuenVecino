import {Injectable} from '@angular/core';
import {ApiService} from '../api.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {TypeModel} from './type.model';

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  url = 'invoice_type/';

  constructor(private apiService: ApiService, private formBuilder: FormBuilder, private router: Router) {
  }

  getForm(): FormGroup {
    return this.formBuilder.group({
      id: [''],
      type: ['', Validators.required],
      title: ['', Validators.required]
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
    if (confirm('¿Desea adicionar el tipo de factura ' + (addForm.value as TypeModel).type + '?')) {
      this.apiService.sendPostRequest(this.url, addForm.value).toPromise().then(value => {
        alert('Tipo de factura ' + (value as TypeModel).type + ' adicionado satisfactoriamente');
        this.list();
      }).catch(reason => alert(reason));

    }
  }

  requestGet(): Observable<any> {
    const typeId = window.localStorage.getItem('typeId');
    if (!typeId) {
      alert('Acción inválida.');
      this.list();
      return;
    }

    return this.apiService.sendGetRequestById(this.url, +typeId);
  }

  requestUpdate(editForm: FormGroup) {
    if (editForm.invalid) {
      alert('Campos obligatorios sin llenar.');
      return;
    }

    if (confirm('¿Desea actualizar el tipo de factura ' + (editForm.value as TypeModel).title + '?')) {
      this.apiService.sendPutRequest(this.url, editForm.value).toPromise().then(value => {
        alert('Tipo factura ' + (value as TypeModel).title + ' actualizado satisfactoriamente');
        this.show(value);
      }).catch(reason => alert(reason));
    }
  }

  // Router
  list(): void {
    this.router.navigate(['list-type']);
  }

  add(): void {
    this.router.navigate(['add-type']);
  }

  show(type: TypeModel): void {
    window.localStorage.removeItem('typeId');
    window.localStorage.setItem('typeId', type.id.toString());
    this.router.navigate(['show-type']);
  }

  edit(type: TypeModel): void {
    window.localStorage.removeItem('typeId');
    window.localStorage.setItem('typeId', type.id.toString());
    this.router.navigate(['edit-type']);
  }

}

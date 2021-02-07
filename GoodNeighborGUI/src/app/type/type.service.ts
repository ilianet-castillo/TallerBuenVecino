import {Injectable} from '@angular/core';
import {ApiService} from '../api.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Type} from './type.model';

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  url = 'type/';

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
      alert('Campos Obligatorios sin llenar');
      return;
    }
    if (confirm('¿Desea adicionar el tipo ' + (addForm.value as Type).type + '?')) {
      this.apiService.sendPostRequest(this.url, addForm.value).toPromise().then(value => {
        alert('Tipo' + (value as Type).type + 'Adicionado satisfactoriamente');
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
      alert('Campos Obligatorios sin llenar');
      return;
    }

    if (confirm('¿Desea actualizar el tipo' + (editForm.value as Type).title + '?')) {
      this.apiService.sendPutRequest(this.url, editForm.value).toPromise().then(value => {
        alert('Type' + (value as Type).title + 'actualizado satisfactoriamente');
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

  show(type: Type): void {
    window.localStorage.removeItem('typeId');
    window.localStorage.setItem('typeId', type.id.toString());
    this.router.navigate(['show-type']);
  }

  edit(type: Type): void {
    window.localStorage.removeItem('typeId');
    window.localStorage.setItem('typeId', type.id.toString());
    this.router.navigate(['edit-type']);
  }

}

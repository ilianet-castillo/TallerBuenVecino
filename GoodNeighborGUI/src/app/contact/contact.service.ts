import {Injectable} from '@angular/core';
import {ApiService} from '../api.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {ContactModel} from './contact.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  url = 'contact/';

  constructor(private apiService: ApiService,
              private formBuilder: FormBuilder,
              private router: Router) {
  }

  getForm(): FormGroup {
    return this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', Validators.email],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]*$/), Validators.minLength(10), Validators.maxLength(10)]],
      tcp: ['', Validators.required],
      nit: ['', [Validators.required, Validators.pattern(/^[0-9]*$/), Validators.minLength(11), Validators.maxLength(11)]],
      accountNumberCUP: ['', [Validators.required, Validators.pattern(/^[0-9]*$/), Validators.minLength(16), Validators.maxLength(16)]],
      accountNumberCUC: ['', [Validators.required, Validators.pattern(/^[0-9]*$/), Validators.minLength(16), Validators.maxLength(16)]],
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

    if (confirm('¿Desea adicionar el contacto ' + (addForm.value as ContactModel).name + '?')) {
      this.apiService.sendPostRequest(this.url, addForm.value).toPromise().then(value => {
        alert('Contacto ' + (value as ContactModel).name + ' adicionado satisfactoriamente');
        this.list();
      }).catch(reason => alert(reason));

    }
  }

  requestGet(): Observable<any> {
    const contactId = window.localStorage.getItem('contactId');
    if (!contactId) {
      alert('Acción inválida.');
      this.list();
      return;
    }

    return this.apiService.sendGetRequestById(this.url, +contactId);
  }

  requestUpdate(editForm: FormGroup) {
    if (editForm.invalid) {
      alert('Campos Obligatorios sin llenar.');
      return;
    }

    if (confirm('¿Desea actualizar el contact ' + (editForm.value as ContactModel).name + '?')) {
      this.apiService.sendPutRequest(this.url, editForm.value).toPromise().then(value => {
        alert('Contacto ' + (value as ContactModel).name + ' actualizado satisfactoriamente');
        this.show(value);
      }).catch(reason => alert(reason));
    }
  }

  // Router
  list(): void {
    this.router.navigate(['list-contact']);
  }

  add(): void {
    this.router.navigate(['add-contact']);
  }

  show(contact: ContactModel): void {
    window.localStorage.removeItem('contactId');
    window.localStorage.setItem('contactId', contact.id.toString());
    this.router.navigate(['show-contact']);
  }

  edit(contact: ContactModel): void {
    window.localStorage.removeItem('contactId');
    window.localStorage.setItem('contactId', contact.id.toString());
    this.router.navigate(['edit-contact']);
  }

}

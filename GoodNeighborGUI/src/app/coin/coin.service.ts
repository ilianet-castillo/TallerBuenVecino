import {Injectable} from '@angular/core';
import {ApiService} from '../api.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Coin} from './coin.model';

@Injectable({
  providedIn: 'root'
})
export class CoinService {

  url = 'coin/';

  constructor(private apiService: ApiService, private formBuilder: FormBuilder, private router: Router) {
  }

  getForm(): FormGroup {
    return this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      acronym: ['', Validators.required]
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
    if (confirm('¿Desea adicionar la moneda ' + (addForm.value as Coin).name + '?')) {
      this.apiService.sendPostRequest(this.url, addForm.value).toPromise().then(value => {
        alert('Moneda' + (value as Coin).name + 'Adicionada satisfactoriamente');
        this.list();
      }).catch(reason => alert(reason));

    }
  }

  requestGet(): Observable<any> {
    const coinId = window.localStorage.getItem('coinId');
    if (!coinId) {
      alert('Acción inválida.');
      this.list();
      return;
    }

    return this.apiService.sendGetRequestById(this.url, +coinId);
  }

  requestUpdate(editForm: FormGroup) {
    if (editForm.invalid) {
      alert('Campos Obligatorios sin llenar');
      return;
    }

    if (confirm('¿Desea actualizar la moneda' + (editForm.value as Coin).name + '?')) {
      this.apiService.sendPutRequest(this.url, editForm.value).toPromise().then(value => {
        alert('Coin' + (value as Coin).name + 'actualizada satisfactoriamente');
        this.show(value);
      }).catch(reason => alert(reason));
    }
  }

  // Router
  list(): void {
    this.router.navigate(['list-coin']);
  }

  add(): void {
    this.router.navigate(['add-coin']);
  }

  show(coin: Coin): void {
    window.localStorage.removeItem('coinId');
    window.localStorage.setItem('coinId', coin.id.toString());
    this.router.navigate(['show-coin']);
  }

  edit(coin: Coin): void {
    window.localStorage.removeItem('coinId');
    window.localStorage.setItem('coinId', coin.id.toString());
    this.router.navigate(['edit-coin']);
  }

}

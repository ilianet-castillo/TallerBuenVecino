import {Injectable} from '@angular/core';
import {ApiService} from '../api.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {CoinModel} from './coin.model';

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
      alert('Campos obligatorios sin llenar');
      return;
    }
    if (confirm('¿Desea adicionar la moneda ' + (addForm.value as CoinModel).name + '?')) {
      this.apiService.sendPostRequest(this.url, addForm.value).toPromise().then(value => {
        alert('Moneda ' + (value as CoinModel).name + ' adicionada satisfactoriamente');
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

    if (confirm('¿Desea actualizar la moneda ' + (editForm.value as CoinModel).name + '?')) {
      this.apiService.sendPutRequest(this.url, editForm.value).toPromise().then(value => {
        alert('Moneda ' + (value as CoinModel).name + ' actualizada satisfactoriamente');
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

  show(coin: CoinModel): void {
    window.localStorage.removeItem('coinId');
    window.localStorage.setItem('coinId', coin.id.toString());
    this.router.navigate(['show-coin']);
  }

  edit(coin: CoinModel): void {
    window.localStorage.removeItem('coinId');
    window.localStorage.setItem('coinId', coin.id.toString());
    this.router.navigate(['edit-coin']);
  }

}

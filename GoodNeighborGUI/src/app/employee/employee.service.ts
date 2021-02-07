import {Injectable} from '@angular/core';
import {ApiService} from '../api.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Employee} from './employee.model';
import {PositionService} from '../position/position.service';
import {ProvinceService} from '../province/province.service';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url = 'employee/';

  constructor(private apiService: ApiService,
              private formBuilder: FormBuilder,
              private router: Router,
              private positionService: PositionService,
              private provinceService: ProvinceService) {
  }

  getForm(): FormGroup {
    return this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]*$/), Validators.minLength(8), Validators.maxLength(8)]],
      identityNumber: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required],
      position: ['', Validators.required],
      province: ['', Validators.required]
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

    if (confirm('¿Desea adicionar el empleado ' + (addForm.value as Employee).name + '?')) {
      this.apiService.sendPostRequest(this.url, addForm.value).toPromise().then(value => {
        alert('Empleado' + (value as Employee).name + 'Adicionado satisfactoriamente');
        this.list();
      }).catch(reason => alert(reason));

    }
  }

  requestGet(): Observable<any> {
    const employeeId = window.localStorage.getItem('employeeId');
    if (!employeeId) {
      alert('Acción inválida.');
      this.list();
      return;
    }

    return this.apiService.sendGetRequestById(this.url, +employeeId);
  }

  requestUpdate(editForm: FormGroup) {
    if (editForm.invalid) {
      alert('Campos Obligatorios sin llenar');
      return;
    }

    if (confirm('¿Desea actualizar el empleado ' + (editForm.value as Employee).name + '?')) {
      this.apiService.sendPutRequest(this.url, editForm.value).toPromise().then(value => {
        alert('Empleado ' + (value as Employee).name + 'actualizado satisfactoriamente');
        this.show(value);
      }).catch(reason => alert(reason));
    }
  }

  // Router
  list(): void {
    this.router.navigate(['list-employee']);
  }

  add(): void {
    this.router.navigate(['add-employee']);
  }

  show(employee: Employee): void {
    window.localStorage.removeItem('employeeId');
    window.localStorage.setItem('employeeId', employee.id.toString());
    this.router.navigate(['show-employee']);
  }

  edit(employee: Employee): void {
    window.localStorage.removeItem('employeeId');
    window.localStorage.setItem('employeeId', employee.id.toString());
    this.router.navigate(['edit-employee']);
  }

  getPosition(): Observable<any> {
    return this.positionService.requestList();
  }

  getProvince(): Observable<any> {
    return this.provinceService.requestList();
  }

}

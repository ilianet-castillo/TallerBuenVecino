import {Injectable} from '@angular/core';
import {ApiService} from '../api.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {EmployeeModel} from './employee.model';
import {PositionService} from '../position/position.service';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url = 'employee/';

  constructor(private apiService: ApiService,
              private formBuilder: FormBuilder,
              private router: Router,
              private positionService: PositionService) {
  }

  getForm(): FormGroup {
    return this.formBuilder.group({
      jsonId: [''],
      id: [''],
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]*$/), Validators.minLength(10), Validators.maxLength(10)]],
      identityNumber: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required],
      position: ['', Validators.required],
      orderWorkshops: ['']
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

    if (confirm('¿Desea adicionar el empleado ' + (addForm.value as EmployeeModel).name + '?')) {
      (addForm.value as EmployeeModel).jsonId = Math.random();
      (addForm.value as EmployeeModel).orderWorkshops = [];
      this.apiService.sendPostRequest(this.url, addForm.value).toPromise().then(value => {
        alert('Empleado ' + (value as EmployeeModel).name + ' adicionado satisfactoriamente');
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
      alert('Campos obligatorios sin llenar.');
      return;
    }

    if (confirm('¿Desea actualizar el empleado ' + (editForm.value as EmployeeModel).name + '?')) {
      this.apiService.sendPutRequest(this.url, editForm.value).toPromise().then(value => {
        alert('Empleado ' + (value as EmployeeModel).name + ' actualizado satisfactoriamente');
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

  show(employee: EmployeeModel): void {
    window.localStorage.removeItem('employeeId');
    window.localStorage.setItem('employeeId', employee.id.toString());
    this.router.navigate(['show-employee']);
  }

  edit(employee: EmployeeModel): void {
    window.localStorage.removeItem('employeeId');
    window.localStorage.setItem('employeeId', employee.id.toString());
    this.router.navigate(['edit-employee']);
  }

  getPosition(): Observable<any> {
    return this.positionService.requestList();
  }

}

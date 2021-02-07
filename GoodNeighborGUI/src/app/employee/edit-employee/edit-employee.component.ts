import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Province} from '../../province/province.model';
import {EmployeeService} from '../employee.service';
import {Position} from '../../position/position.model';
import {Employee} from '../employee.model';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  editForm: FormGroup;
  positions: Position[];
  provinces: Province[];

  constructor(private employeeService: EmployeeService) {
    this.employeeService.getPosition().toPromise().then(value => {
      this.positions = (value as Position[]).sort((a, b) => a.name > b.name ? 1 : -1);
    }).catch(reason => alert(reason));

    this.employeeService.getProvince().toPromise().then(value => {
      this.provinces = (value as Province[]).sort((a, b) => a.name > b.name ? 1 : -1);
    }).catch(reason => alert(reason));
  }

  ngOnInit(): void {
    this.editForm = this.employeeService.getForm();
    this.employeeService.requestGet().toPromise().then(value => {
      this.editForm.setValue(value);
    }).catch(reason => alert(reason));
  }

  onSubmit() {
    this.employeeService.requestUpdate(this.editForm);
  }

  cancel(): void {
    this.employeeService.show(this.editForm.value);
  }

  isPositionSelect(position: Position): boolean {
    return (this.editForm.value as Employee).position.id === position.id;
  }

  isProvinceSelect(province: Province): boolean {
    return (this.editForm.value as Employee).province.id === province.id;
  }

}

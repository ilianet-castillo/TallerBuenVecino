import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {EmployeeService} from '../employee.service';
import {PositionModel} from '../../position/position.model';
import {EmployeeModel} from '../employee.model';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  editForm: FormGroup;
  positions: PositionModel[];

  constructor(private employeeService: EmployeeService) {
    this.employeeService.getPosition().toPromise().then(value => {
      this.positions = (value as PositionModel[]).sort((a, b) => a.name > b.name ? 1 : -1);
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

  isPositionSelect(position: PositionModel): boolean {
    return (this.editForm.value as EmployeeModel).position.id === position.id;
  }

}

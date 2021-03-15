import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {EmployeeService} from '../employee.service';
import {PositionModel} from '../../position/position.model';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  addForm: FormGroup;
  positions: PositionModel[];

  constructor(private employeeService: EmployeeService) {
    this.employeeService.getPosition().toPromise().then(value => {
      this.positions = (value as PositionModel[]).sort((a, b) => a.name > b.name ? 1 : -1);
    }).catch(reason => alert(reason));
  }

  ngOnInit(): void {
    this.addForm = this.employeeService.getForm();
  }

  onSubmit() {
    this.employeeService.requestAdd(this.addForm);
  }

  cancel(): void {
    this.employeeService.list();
  }

}

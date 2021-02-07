import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {EmployeeService} from '../employee.service';
import {Province} from '../../province/province.model';
import {Position} from '../../position/position.model';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  addForm: FormGroup;
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

    this.addForm = this.employeeService.getForm();
  }

  onSubmit() {
    this.employeeService.requestAdd(this.addForm);
  }

  cancel(): void {
    this.employeeService.list();
  }

}

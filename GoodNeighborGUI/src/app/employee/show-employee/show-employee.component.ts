import {Component, OnInit} from '@angular/core';
import {EmployeeModel} from '../employee.model';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-show-employee',
  templateUrl: './show-employee.component.html',
  styleUrls: ['./show-employee.component.css']
})
export class ShowEmployeeComponent implements OnInit {

  employee: EmployeeModel;

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    this.employeeService.requestGet().toPromise().then(value => {
      this.employee = value as EmployeeModel;
    }).catch(reason => alert(reason));
  }

  edit(): void {
    this.employeeService.edit(this.employee);
  }

  cancel(): void {
    this.employeeService.list();
  }

}

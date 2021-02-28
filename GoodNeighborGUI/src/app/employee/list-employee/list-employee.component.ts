import {Component, OnInit} from '@angular/core';
import {EmployeeService} from '../employee.service';
import {EmployeeModel} from '../employee.model';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  displayedColumns: string[] = ['action', 'name', 'phone', 'email'];
  employees: EmployeeModel[];

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    this.employeeService.requestList().toPromise().then(value => {
      this.employees = (value as EmployeeModel[]);
    }).catch(reason => alert(reason));
  }

  add(): void {
    this.employeeService.add();
  }

  show(employee: EmployeeModel): void {
    this.employeeService.show(employee);
  }

}

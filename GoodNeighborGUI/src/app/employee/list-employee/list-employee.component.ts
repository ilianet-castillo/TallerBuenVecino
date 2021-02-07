import {Component, OnInit} from '@angular/core';
import {EmployeeService} from '../employee.service';
import {Employee} from '../employee.model';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  displayedColumns: string[] = ['action', 'name', 'phone', 'email'];
  employees: Employee[];

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    this.employeeService.requestList().toPromise().then(value => {
      this.employees = (value as Employee[]);
    }).catch(reason => alert(reason));
  }

  add(): void {
    this.employeeService.add();
  }

  show(employee: Employee): void {
    this.employeeService.show(employee);
  }

}

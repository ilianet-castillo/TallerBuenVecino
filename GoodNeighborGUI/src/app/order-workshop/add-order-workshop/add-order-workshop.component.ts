import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {OrderWorkshopService} from '../order-workshop.service';
import {Employee} from '../../employee/employee.model';

@Component({
  selector: 'app-add-order-workshop',
  templateUrl: './add-order-workshop.component.html',
  styleUrls: ['./add-order-workshop.component.css']
})
export class AddOrderWorkshopComponent implements OnInit {
  addForm: FormGroup;
  employees: Employee[];

  constructor(private orderWorkshopService: OrderWorkshopService) {
    this.orderWorkshopService.getEmployee().toPromise().then(value => {
      this.employees = (value as Employee[]).sort((a, b) => a.name > b.name ? 1 : -1);
    }).catch(reason => alert(reason));
  }

  ngOnInit(): void {


    this.addForm = this.orderWorkshopService.getForm();
  }

  onSubmit() {
    this.orderWorkshopService.requestAdd(this.addForm);
  }

  getDate(): Date {
    return this.orderWorkshopService.getDate();
  }

  cancel(): void {
    this.orderWorkshopService.list();
  }

}

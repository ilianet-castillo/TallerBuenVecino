import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {OrderWorkshopService} from '../order-workshop.service';
import {Employee} from '../../employee/employee.model';
import {Invoice} from '../../invoice/invoice.model';

@Component({
  selector: 'app-edit-order-workshop',
  templateUrl: './edit-order-workshop.component.html',
  styleUrls: ['./edit-order-workshop.component.css']
})
export class EditOrderWorkshopComponent implements OnInit {
  editForm: FormGroup;
  employees: Employee[];

  constructor(private orderWorkshopService: OrderWorkshopService) {
    this.orderWorkshopService.getEmployee().toPromise().then(value => {
      this.employees = (value as Employee[]).sort((a, b) => a.name > b.name ? 1 : -1);
    }).catch(reason => alert(reason));
  }

  ngOnInit(): void {
    this.editForm = this.orderWorkshopService.getForm();
    this.orderWorkshopService.requestGet().toPromise().then(value => {
      this.editForm.setValue(value);
    }).catch(reason => alert(reason));
  }

  onSubmit() {
    this.orderWorkshopService.requestUpdate(this.editForm);
  }

  cancel(): void {
    this.orderWorkshopService.show(this.editForm.value);
  }

  isEmployeeSelect(employee: Employee): boolean {
    return (this.editForm.value as Invoice).employee.id === employee.id;
  }
}

import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Position} from '../../position/position.model';
import {ClientService} from '../client.service';
import {Employee} from '../../employee/employee.model';
import {Province} from '../../province/province.model';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {
  editForm: FormGroup;
  positions: Position[];
  constructor(private clientService: ClientService) {
    this.clientService.getPosition().toPromise().then(value => {
      this.positions = (value as Position[]).sort((a, b) => a.name > b.name ? 1 : -1);
    }).catch(reason => alert(reason));
  }

  ngOnInit(): void {

    this.editForm = this.clientService.getForm();
    this.clientService.requestGet().toPromise().then(value => {
      this.editForm.setValue(value);
    }).catch(reason => alert(reason));
  }

  onSubmit() {
    this.clientService.requestUpdate(this.editForm);
  }

  cancel(): void {
    this.clientService.show(this.editForm.value);
  }

  isPositionSelect(position: Position): boolean {
    return (this.editForm.value as Employee).position.id === position.id;
  }


}

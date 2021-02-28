import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ClientModel} from '../../client/client.model';
import {VehicleService} from '../vehicle.service';
import {VehicleModel} from '../vehicle.model';

@Component({
  selector: 'app-edit-vehicle',
  templateUrl: './edit-vehicle.component.html',
  styleUrls: ['./edit-vehicle.component.css']
})
export class EditVehicleComponent implements OnInit {

  editForm: FormGroup;
  clients: ClientModel[];

  constructor(private vehicleService: VehicleService) {
    this.vehicleService.getClient().toPromise().then(value => {
      this.clients = (value as ClientModel[]).sort((a, b) => a.enterpriseName > b.enterpriseName ? 1 : -1);
    }).catch(reason => alert(reason));
  }

  ngOnInit(): void {
    this.editForm = this.vehicleService.getForm();
    this.vehicleService.requestGet().toPromise().then(value => {
      this.editForm.setValue(value);
    }).catch(reason => alert(reason));
  }

  onSubmit() {
    this.vehicleService.requestUpdate(this.editForm);
  }

  cancel(): void {
    this.vehicleService.show(this.editForm.value);
  }

  isClientSelect(client: ClientModel): boolean {
    return (this.editForm.value as VehicleModel).client.id === client.id;
  }

}

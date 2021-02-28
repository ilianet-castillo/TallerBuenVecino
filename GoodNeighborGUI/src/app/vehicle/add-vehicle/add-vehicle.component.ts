import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ClientModel} from '../../client/client.model';
import {VehicleService} from '../vehicle.service';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent implements OnInit {

  addForm: FormGroup;
  clients: ClientModel[];

  constructor(private vehicleService: VehicleService) {
    this.vehicleService.getClient().toPromise().then(value => {
      this.clients = (value as ClientModel[]).sort((a, b) => a.enterpriseName > b.enterpriseName ? 1 : -1);
    }).catch(reason => alert(reason));

  }

  ngOnInit(): void {
    this.addForm = this.vehicleService.getForm();
  }

  onSubmit() {
    this.vehicleService.requestAdd(this.addForm);
  }

  cancel(): void {
    this.vehicleService.list();
  }

}

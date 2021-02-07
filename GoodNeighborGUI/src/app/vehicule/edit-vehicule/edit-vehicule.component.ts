import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Client} from '../../client/client.model';
import {VehiculeService} from '../vehicule.service';
import {Vehicule} from '../vehicule.model';

@Component({
  selector: 'app-edit-vehicule',
  templateUrl: './edit-vehicule.component.html',
  styleUrls: ['./edit-vehicule.component.css']
})
export class EditVehiculeComponent implements OnInit {
  editForm: FormGroup;
  clients: Client[];

  constructor(private vehiculeService: VehiculeService) {
    this.vehiculeService.getClient().toPromise().then(value => {
      this.clients = (value as Client[]).sort((a, b) => a.enterpriseName > b.enterpriseName ? 1 : -1);
    }).catch(reason => alert(reason));
  }

  ngOnInit(): void {
    this.editForm = this.vehiculeService.getForm();
    this.vehiculeService.requestGet().toPromise().then(value => {
      this.editForm.setValue(value);
    }).catch(reason => alert(reason));
  }

  onSubmit() {
    this.vehiculeService.requestUpdate(this.editForm);
  }

  cancel(): void {
    this.vehiculeService.show(this.editForm.value);
  }

  isClientSelect(client: Client): boolean {
    return (this.editForm.value as Vehicule).client.id === client.id;
  }

}

import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Client} from '../../client/client.model';
import {VehiculeService} from '../vehicule.service';

@Component({
  selector: 'app-add-vehicule',
  templateUrl: './add-vehicule.component.html',
  styleUrls: ['./add-vehicule.component.css']
})
export class AddVehiculeComponent implements OnInit {
  addForm: FormGroup;
  clients: Client[];

  constructor(private vehiculeService: VehiculeService) {
    this.vehiculeService.getClient().toPromise().then(value => {
      this.clients = (value as Client[]).sort((a, b) => a.enterpriseName > b.enterpriseName ? 1 : -1);
    }).catch(reason => alert(reason));

  }

  ngOnInit(): void {

    this.addForm = this.vehiculeService.getForm();
  }

  onSubmit() {
    this.vehiculeService.requestAdd(this.addForm);
  }

  cancel(): void {
    this.vehiculeService.list();
  }
}

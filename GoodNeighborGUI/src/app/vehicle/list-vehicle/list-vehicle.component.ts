import {Component, OnInit} from '@angular/core';
import {VehicleModel} from '../vehicle.model';
import {VehicleService} from '../vehicle.service';

@Component({
  selector: 'app-list-vehicle',
  templateUrl: './list-vehicle.component.html',
  styleUrls: ['./list-vehicle.component.css']
})
export class ListVehicleComponent implements OnInit {

  displayedColumns: string[] = ['action', 'markModel', 'sheet', 'kms', 'color', 'comments'];
  vehicles: VehicleModel[];

  constructor(private vehicleService: VehicleService) {
  }

  ngOnInit(): void {
    this.vehicleService.requestList().toPromise().then(value => {
      this.vehicles = (value as VehicleModel[]);
    }).catch(reason => alert(reason));
  }

  add(): void {
    this.vehicleService.add();
  }

  show(vehicle: VehicleModel): void {
    this.vehicleService.show(vehicle);
  }

}

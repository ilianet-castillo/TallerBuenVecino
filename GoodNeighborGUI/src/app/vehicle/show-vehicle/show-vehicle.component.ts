import {Component, OnInit} from '@angular/core';
import {VehicleModel} from '../vehicle.model';
import {VehicleService} from '../vehicle.service';

@Component({
  selector: 'app-show-vehicle',
  templateUrl: './show-vehicle.component.html',
  styleUrls: ['./show-vehicle.component.css']
})
export class ShowVehicleComponent implements OnInit {

  vehicle: VehicleModel;

  constructor(private vehicleService: VehicleService) {
  }

  ngOnInit(): void {
    this.vehicleService.requestGet().toPromise().then(value => {
      this.vehicle = value as VehicleModel;
    }).catch(reason => alert(reason));
  }

  edit(): void {
    this.vehicleService.edit(this.vehicle);
  }

  cancel(): void {
    this.vehicleService.list();
  }


}

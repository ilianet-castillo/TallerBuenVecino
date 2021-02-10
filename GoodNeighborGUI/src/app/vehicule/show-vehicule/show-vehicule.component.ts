import {Component, OnInit} from '@angular/core';
import {Vehicule} from '../vehicule.model';
import {VehiculeService} from '../vehicule.service';

@Component({
  selector: 'app-show-vehicule',
  templateUrl: './show-vehicule.component.html',
  styleUrls: ['./show-vehicule.component.css']
})
export class ShowVehiculeComponent implements OnInit {
  vehicule: Vehicule;

  constructor(private vehiculeService: VehiculeService) {
  }

  ngOnInit(): void {
    this.vehiculeService.requestGet().toPromise().then(value => {
      this.vehicule = value as Vehicule;
    }).catch(reason => alert(reason));
  }

  edit(): void {
    this.vehiculeService.edit(this.vehicule);
  }

  cancel(): void {
    this.vehiculeService.list();
  }


}

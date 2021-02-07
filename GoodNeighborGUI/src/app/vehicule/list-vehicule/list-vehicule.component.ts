import {Component, OnInit} from '@angular/core';
import {Vehicule} from '../vehicule.model';
import {VehiculeService} from '../vehicule.service';

@Component({
  selector: 'app-list-vehicule',
  templateUrl: './list-vehicule.component.html',
  styleUrls: ['./list-vehicule.component.css']
})
export class ListVehiculeComponent implements OnInit {
  displayedColumns: string[] = ['action', 'markModel', 'sheet', 'km', 'color', 'coment'];
  vehicules: Vehicule[];

  constructor(private vehiculeService: VehiculeService) {
  }

  ngOnInit(): void {
    this.vehiculeService.requestList().toPromise().then(value => {
      this.vehicules = (value as Vehicule[]);
    }).catch(reason => alert(reason));
  }

  add(): void {
    this.vehiculeService.add();
  }

  show(vehicule: Vehicule): void {
    this.vehiculeService.show(vehicule);
  }

}

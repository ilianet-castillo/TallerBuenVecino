import {Component, OnInit} from '@angular/core';
import {PositionService} from '../position.service';
import {PositionModel} from '../position.model';

@Component({
  selector: 'app-list-position',
  templateUrl: './list-position.component.html',
  styleUrls: ['./list-position.component.css']
})
export class ListPositionComponent implements OnInit {

  displayedColumns: string[] = ['action', 'name'];
  positions: PositionModel[];

  constructor(private positionService: PositionService) {
  }

  ngOnInit(): void {
    this.positionService.requestList().toPromise().then(value => {
      this.positions = (value as PositionModel[]);
    }).catch(reason => alert(reason));
  }

  add(): void {
    this.positionService.add();
  }

  show(position: PositionModel): void {
    this.positionService.show(position);
  }

}

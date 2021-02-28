import {Component, OnInit} from '@angular/core';
import {PositionService} from '../position.service';
import {PositionModel} from '../position.model';

@Component({
  selector: 'app-show-position',
  templateUrl: './show-position.component.html',
  styleUrls: ['./show-position.component.css']
})
export class ShowPositionComponent implements OnInit {

  position: PositionModel;

  constructor(private positionService: PositionService) {
  }

  ngOnInit(): void {
    this.positionService.requestGet().toPromise().then(value => {
      this.position = value as PositionModel;
    }).catch(reason => alert(reason));
  }

  edit(): void {
    this.positionService.edit(this.position);
  }

  cancel(): void {
    this.positionService.list();
  }

}

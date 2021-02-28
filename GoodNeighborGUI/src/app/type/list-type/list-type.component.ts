import {Component, OnInit} from '@angular/core';
import {TypeService} from '../type.service';
import {TypeModel} from '../type.model';

@Component({
  selector: 'app-list-type',
  templateUrl: './list-type.component.html',
  styleUrls: ['./list-type.component.css']
})
export class ListTypeComponent implements OnInit {

  displayedColumns: string[] = ['action', 'type', 'title'];
  types: TypeModel[];

  constructor(private typeService: TypeService) {
  }

  ngOnInit(): void {
    this.typeService.requestList().toPromise().then(value => {
      this.types = (value as TypeModel[]);
    }).catch(reason => alert(reason));
  }

  add(): void {
    this.typeService.add();
  }

  show(type: TypeModel): void {
    this.typeService.show(type);
  }

}

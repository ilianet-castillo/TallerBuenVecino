import {Component, OnInit} from '@angular/core';
import {TypeService} from '../type.service';
import {Type} from '../type.model';

@Component({
  selector: 'app-list-type',
  templateUrl: './list-type.component.html',
  styleUrls: ['./list-type.component.css']
})
export class ListTypeComponent implements OnInit {

  displayedColumns: string[] = ['action', 'type', 'title'];
  types: Type[];

  constructor(private typeService: TypeService) {
  }

  ngOnInit(): void {
    this.typeService.requestList().toPromise().then(value => {
      this.types = (value as Type[]);
    }).catch(reason => alert(reason));
  }

  add(): void {
    this.typeService.add();
  }

  show(type: Type): void {
    this.typeService.show(type);
  }

}

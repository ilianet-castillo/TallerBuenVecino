import {Component, OnInit} from '@angular/core';
import {Type} from '../type.model';
import {TypeService} from '../type.service';

@Component({
  selector: 'app-show-type',
  templateUrl: './show-type.component.html',
  styleUrls: ['./show-type.component.css']
})
export class ShowTypeComponent implements OnInit {

  type: Type;

  constructor(private typeService: TypeService) {
  }

  ngOnInit(): void {
    this.typeService.requestGet().toPromise().then(value => {
      this.type = value as Type;
    }).catch(reason => alert(reason));
  }

  edit(): void {
    this.typeService.edit(this.type);
  }

  cancel(): void {
    this.typeService.list();
  }

}

import {Component, OnInit} from '@angular/core';
import {DescriptionModel} from '../description.model';
import {DescriptionService} from '../description.service';

@Component({
  selector: 'app-list-description',
  templateUrl: './list-description.component.html',
  styleUrls: ['./list-description.component.css']
})
export class ListDescriptionComponent implements OnInit {

  displayedColumns: string[] = ['action', 'workDescription', 'amount'];
  descriptions: DescriptionModel[];

  constructor(private descriptionService: DescriptionService) {
  }

  ngOnInit(): void {
    this.descriptionService.requestList().toPromise().then(value => {
      this.descriptions = (value as DescriptionModel[]);
    }).catch(reason => alert(reason));
  }

  add(): void {
    this.descriptionService.add();
  }

  show(description: DescriptionModel): void {
    this.descriptionService.show(description);
  }

}

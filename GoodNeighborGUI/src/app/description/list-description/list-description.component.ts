import {Component, OnInit} from '@angular/core';
import {Description} from '../description.model';
import {DescriptionService} from '../description.service';

@Component({
  selector: 'app-list-description',
  templateUrl: './list-description.component.html',
  styleUrls: ['./list-description.component.css']
})
export class ListDescriptionComponent implements OnInit {
  displayedColumns: string[] = ['action', 'no', 'workDescription', 'amount'];
  descriptions: Description[];

  constructor(private descriptionService: DescriptionService) {
  }

  ngOnInit(): void {
    this.descriptionService.requestList().toPromise().then(value => {
      this.descriptions = (value as Description[]);
    }).catch(reason => alert(reason));
  }

  add(): void {
    this.descriptionService.add();
  }

  show(description: Description): void {
    this.descriptionService.show(description);
  }

}
